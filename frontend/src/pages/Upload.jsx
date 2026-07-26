import DashboardLayout from "../layouts/DashboardLayout";

function Upload() {
  return (
    <DashboardLayout>

      <h1 className="mb-8 text-4xl font-bold">
        Upload Medical Reports
      </h1>

      <div className="rounded-xl border-2 border-dashed border-blue-400 bg-white p-20 text-center">

        <h2 className="text-2xl font-semibold">
          Drag & Drop Reports Here
        </h2>

        <p className="mt-3 text-gray-600">
          PDF, Images, DOCX
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white">
          Browse Files
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Upload;