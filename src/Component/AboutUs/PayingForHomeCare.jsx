
const PayingForHomeCare = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Paying for Care - Your Personal Choice</h1>
          <p className="text-lg mt-2">When you or someone you care about decides that they need care at home</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-8">
        {/* Intro Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-3">Understanding the Financial Aspect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you or someone you care about decides that they need care at home, we understand that having to think about paying for care can be a difficult decision.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are receiving care that has been arranged by the local authority you can change your care provider if you are not happy, free of charge.
          </p>
        </section>

        {/* Direct Payment Scheme */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">DIRECT PAYMENT SCHEME</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wirral Borough Council operate a Direct Payment Scheme. We are registered with this scheme to receive payments directly from the local authority if you prefer not to manage the finances for your care.
          </p>
        </section>

        {/* Help with Costs Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Help with Costs for Home Care</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depending on your personal circumstances, the local authority (Wirral Borough Council or Flintshire County Council) may be able to meet some or all of your costs for home care.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            It may be that the local authority will agree to pay for some aspects of your care but not agree to pay for others. This is very common and we usually have separate arrangements in place to cover this shortfall directly with the service user and/or their families.
          </p>
        </section>

        {/* Flexibility Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Flexibility to Pay for the Care You Want</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            No one person we provide care for is the same. Each person is unique and requires different levels of support. From personal care through to social calls, all the way to shopping visits and house cleaning…Beloved Homecare can provide a package to suit your individual needs.
          </p>
        </section>

        {/* Payment Methods Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">How Do We Pay for the Care We Require?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We invoice for care packages in advance. We will always prepare an invoice that will be sent via our E Mail address, posted to your address, or given to you in person by a member of the management team.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            All invoices can be paid by bank transfer, direct payment from local authority, or in exceptional circumstances, cash to the management team (who must provide a written receipt).
          </p>
        </section>

        {/* Examples of Home Care Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Examples of Home Care We Provide</h3>
          <ul className="list-disc ml-5 text-gray-700 leading-relaxed space-y-2">
            <li>Washing, Dressing, Medication</li>
            <li>Prepare and serve meals</li>
            <li>Social outings to see friends and family</li>
            <li>Take you to appointments</li>
            <li>Home help such as cleaning homes</li>
            <li>Help you to walk your dog</li>
            <li>Shopping</li>
            <li>Live-in Care 24/7</li>
            <li>Overnight care</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PayingForHomeCare;
