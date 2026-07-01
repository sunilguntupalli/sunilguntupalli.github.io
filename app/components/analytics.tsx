export default function Analytics() {
  const siteCode = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE?.trim();

  if (!siteCode) return null;

  return (
    <script
      data-goatcounter={`https://${siteCode}.goatcounter.com/count`}
      async
      src="https://gc.zgo.at/count.js"
    />
  );
}
