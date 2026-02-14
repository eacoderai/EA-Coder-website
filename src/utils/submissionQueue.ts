const ENDPOINT = 'https://formspree.io/f/xreapqvd';
const KEY = 'eac_submission_queue_v1';

type Payload = {
  email: string;
  source: string;
};

let onlineListenerAttached = false;

function readQueue(): Payload[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as Payload[];
    return [];
  } catch {
    return [];
  }
}

function writeQueue(items: Payload[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* noop */
  }
}

export async function submitNow(payload: Payload): Promise<boolean> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function enqueue(payload: Payload) {
  const q = readQueue();
  q.push(payload);
  writeQueue(q);
}

export async function flushQueue() {
  const q = readQueue();
  if (!q.length) return;
  const remaining: Payload[] = [];
  for (const item of q) {
    const ok = await submitNow(item);
    if (!ok) remaining.push(item);
  }
  writeQueue(remaining);
}

export function setupOnlineFlush() {
  if (typeof window === 'undefined') return;
  if (onlineListenerAttached) return;
  onlineListenerAttached = true;
  window.addEventListener('online', () => {
    flushQueue();
  });
}

