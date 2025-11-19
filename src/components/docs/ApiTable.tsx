import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

export type ApiRow = { name: string; type: string; defaultValue?: string; description: string };

export default function ApiTable({ rows }: { rows: ApiRow[] }) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="px-6 pt-6">
        <h4>API</h4>
      </div>
      <div className="px-6 pb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.name}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.defaultValue ?? '-'}</TableCell>
                <TableCell>{r.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}