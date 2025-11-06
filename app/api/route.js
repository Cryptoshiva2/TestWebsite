export async function POST(request) {
  const data = await request.json();

  // Get existing submissions
  const existing = JSON.parse(globalThis.localStorageData || "[]");
  existing.push(data);
  globalThis.localStorageData = JSON.stringify(existing);

  return new Response(
    JSON.stringify({ success: true, message: "Form submitted successfully!" }),
    { status: 200 }
  );
}
