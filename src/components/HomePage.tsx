import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <main className="bg-white  text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-indigo-100 to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MySchool Portal
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A modern, student-focused platform to manage admissions and profiles.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Easy Enrollment</h3>
            <p className="text-gray-600 text-sm">
              Apply to schools in just a few steps with our guided forms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Secure Profiles</h3>
            <p className="text-gray-600 text-sm">
              Keep student information protected and accessible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our team is ready to help whenever you need assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MySchool. All rights reserved.
      </footer>
    </main>
    </div>
  );
};

export default HomePage;
