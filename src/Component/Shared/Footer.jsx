import appStore from "../../assets/footer/Download_on_the_App_Store_Badge.svg.png";
import googleStore from "../../assets/footer/en_badge_web_generic.png";
import logo from "../../assets/dashboard/Frame 230.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#171717] text-[#BCBDBD] text-xl ">
        <aside>
          <img src={logo} alt="logo" />
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Startups</a>
          <a className="link link-hover">Resources</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover" href="https://autobom.ai/">
            Press
          </a>
          <a className="link link-hover" href="/dashboard">
            Dashboard
          </a>
        </nav>
        <nav>
          <header className="footer-title">Contact us</header>
          <p className=" w-1/2 mb-4">
            - Contact our team for inquiries, support, or partnerships:
          </p>
          <p>Email: contact@autobom.ai</p>
          <p>Phone: +1-123-456-7890</p>
        </nav>
      </footer>
      <footer className=" p-10 bg-[#171717] text-[#BCBDBD]">
        <nav>
          <div className="lg:flex justify-start items-center gap-6">
            <div className="flex justify-center items-center gap-x-6">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
            <div className="flex justify-center items-center lg:pl-36">
              <img className="w-32" src={appStore} alt="logo" />
              <img className="w-36" src={googleStore} alt="logo" />
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-10  bg-[#171717] text-[#BCBDBD]">
        <nav>
          <div className="text-sm lg:text-start text-center py-24">
            <p className="my-4">
              Copyright © 2023 Automated BOM - AI - All Rights Reserved.
            </p>
            <p>Privacy Policy and Terms of Service:</p>
            <p>
              Read our Privacy Policy and Terms of Service to learn how we
              handle your data and your responsibilities
            </p>
            <p>
              Investing in securities products involves risk and you could lose
              money. AUTOBOM AI Treasury is not a bank nor an investment adviser
              and your AUTOBOM AI business account is not an FDIC-insured bank
              account
            </p>

            <p>
              *Your account earns yield on an annual basis. The figure shown
              here is an estimate of the annualized yield based on the average
              performance of the past seven days.* Yield is variable and
              fluctuates. Carefully consider a fund's investment objectives,
              risks, charges and expenses, as described in the applicable mutual
              fund’s prospectus. Contact us for a copy of the fund prospectus.
              Past performance does not guarantee future results, which may
              vary.
            </p>
            <p>
              Remember that your website should be clear, concise, and
              user-friendly. Use engaging visuals and maintain a consistent tone
              throughout.
            </p>
            <p>
              This is not an offer, solicitation of an offer, recommendation or
              advice to buy or sell any security, financial product, instrument
              or to open a brokerage account in any jurisdiction where AUTOBOM
              AI Treasury is not registered. Review the background of AUTOBOM AI
              Treasury or its investment professionals on FINRA's BrokerCheck
              website. Please visit the Deposit Sweep Program Disclosure
              Statement for important legal disclosures.
            </p>

            <p className="font-bold my-4">
              AUTOBOM.AI IS Transforming Bill of Materials (BOM) Management.
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
