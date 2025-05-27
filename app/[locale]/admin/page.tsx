import { setRequestLocale } from 'next-intl/server';
import AdminFormLogsClient from './AdminFormLogsClient';

export default function AdminPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <AdminFormLogsClient />;
}
