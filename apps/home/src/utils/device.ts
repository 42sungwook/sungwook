import { headers } from 'next/headers';

export async function getDevice() {
  const headerList = await headers();
  const device = headerList.get('x-is-mobile') ?? 'desktop';
  return device;
}
