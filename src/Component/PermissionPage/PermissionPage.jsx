import { Link } from "react-router-dom";


const PermissionPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header Section */}
      {/* <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Permission Page</h1>
          <p className="text-lg mt-2">অনুমতির জন্য দুটি ছবি এবং বোতাম যুক্ত করা হলো</p>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First Image Section */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
         <Link to="https://www.cqc.org.uk/location/1-10551623499" target="_blank">
         <img
              src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/2c0c1715-65ce-4a67-ba6e-324169eb4b95/CQC+inspected+and+rated+good+RGB.jpg?format=1500w"
              alt="Image 1"
              className="w-full h-96 "
            />
         </Link>
          </div>

          {/* Second Image Section */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
           <Link to="https://goodbusinesscharter.com/" target="_blank"> 
           <img
              src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/5d061241-5491-4932-a528-79bc04804bc9/GBC+Logo.png?format=1500w"
              alt="Image 2"
              className="w-full h-96  "
            />
            </Link>
          </div>
        </div>

       
      </main>
    </div>
  );
};

export default PermissionPage;
