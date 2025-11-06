export async function POST(request) {
  try {
    const data = await request.json();

    console.log("📥 Form submission:", data);

    // TODO: Save to database, send email, etc.
    // For now, just simulate success.
    return new Response(
      JSON.stringify({ success: true, message: "Form received!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong." }),
      { status: 500 }
    );
  }
}
