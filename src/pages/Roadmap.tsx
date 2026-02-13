import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

export default function Roadmap() {
  return (
    <>
      <Seo title="Roadmap | EACoder AI" description="EACoder AI roadmap with current, upcoming releases, timeline, and priorities." />
      <DocLayout title="Product Roadmap" subtitle="Planned releases and priorities">
        <Card>
          <CardHeader>
            <CardTitle>Current Release</CardTitle>
            <CardDescription>Highlights of the latest updates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 text-sm text-gray-600">
              <li>Docs landing pages for Product, Resources, Legal</li>
              <li>FAQ page with accessible accordion</li>
              <li>Social links and official TikTok icon</li>
              <li>Build output aligned for Vercel</li>
            </ul>
          </CardContent>
        </Card>

        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Upcoming</h4></div>
          <div className="px-6 pb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Initiative</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Strategy Builder v2</TableCell>
                  <TableCell>In progress</TableCell>
                  <TableCell>Q4 2025</TableCell>
                  <TableCell>Enhanced editor and presets</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Backtesting engine</TableCell>
                  <TableCell>Planned</TableCell>
                  <TableCell>Q1 2026</TableCell>
                  <TableCell>Fast, reproducible simulations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cloud sync</TableCell>
                  <TableCell>Planned</TableCell>
                  <TableCell>Q1 2026</TableCell>
                  <TableCell>Multi-device strategy storage</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>API access</TableCell>
                  <TableCell>Planned</TableCell>
                  <TableCell>Q2 2026</TableCell>
                  <TableCell>Programmatic strategy management</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Marketplace</TableCell>
                  <TableCell>Planned</TableCell>
                  <TableCell>Q2 2026</TableCell>
                  <TableCell>Share and discover strategies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </DocLayout>
    </>
  );
}