'use client'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Dropdowns() {
  const [open, setOpen] = useState(null);
  const handletoggle = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };

  return (
    <div className="w-full font-primary gap-4 tracking-[1.1px] flex py-10 lg:w-8/12 justify-center flex-col items-start">
      <div
        onClick={() => handletoggle(1)}
        className="text-[25px] w-full cursor-pointer bg-slate-100  py-2"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 1 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> Here&apos;s how it works
        </p>
        <div
          className={` ${
            open === 1 ? "content show" : "content"
          }  w-full px-2 text-[15px]  flex flex-col items-start justify-center`}
        >
          <p>
            a.Make a referral by carefully providing details online on
            www.hiringplug.com/refer.
          </p>
          <p>
            b.Our team will understand more details about the opportunity by
            talking to you and validate the lead.
          </p>
          <div className="w-full flex items-center justify-center md:flex-row flex-col">
            <div className="w-full md:w-[33.3%] border-2 border-black flex-col flex items-center justify-center">
              <p className="font-semibold">Category A employer</p>
              <p>{`(Any Company with > 10K employees)`}</p>
              <p>
                <span className="font-semibold">On Signup (Rs.)</span> 5,000
              </p>
              <p>
                <span className="font-semibold">On each Placement (Rs.)</span>
                5,000
              </p>
            </div>
            <div className="w-full md:w-[33.3%] border-2 border-black flex-col flex items-center justify-center">
              <p className="font-semibold">Category B employer</p>
              <p>{`(Fortune 500 listed company with < 10K employees)`}</p>
              <p>
                <span className="font-semibold">On Signup (Rs.)</span> 3,000
              </p>
              <p>
                <span className="font-semibold">On each Placement (Rs.)</span>
                4,000
              </p>
            </div>
            <div className="w-full md:w-[33.3%] border-2 border-black flex-col flex items-center justify-center">
              <p className="font-semibold">Category C employer</p>
              <p>{`(Any other company with < 10K employees)`}</p>
              <p>
                <span className="font-semibold">On Signup (Rs.)</span> 1,000
              </p>
              <p>
                <span className="font-semibold">On each Placement (Rs.)</span>
                3,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handletoggle(2)}
        className="text-[25px] w-full cursor-pointer"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 2 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> You Earning potential (Rs.)
        </p>
        <div
          className={` ${
            open === 2 ? "content show border-black border-2" : "content"
          } w-full flex flex-col items-center justify-center   `}
        >
          <div className="w-full text-[15px] flex items-center justify-around">
            <p>Each Category A client</p>
            <p>55,000</p>
          </div>
          <div className="w-full text-[15px] flex items-center justify-around">
            <p>Each Category B client</p>
            <p>43,000</p>
          </div>
          <div className="w-full text-[15px] flex items-center justify-around">
            <p>Each Category C client</p>
            <p>31,000</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => handletoggle(3)}
        className="text-[25px] w-full bg-slate-100 cursor-pointer  py-2"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 3 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> Some Illustrations (Earning
          potential)
        </p>
        <div
          className={`${
            open === 3 ? "content show" : "content"
          } px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
            If you refer 12 clients (say, 4 each for Category A , Category B and
            Category C clients), you can earn Rs. 516,000 as a referral fee!
          </p>
          <p>
            If you refer 10 clients (say, 3 Category A clients, 3 Category B
            clients & 4 Category C clients), you can earn Rs. 418,000 as a
            referral fee!
          </p>
          <p>
            If you refer 8 clients (say, 4 Category A clients and 4 Category B
            clients), you can earn Rs. 392,000 as a referral fee!
          </p>
          <p>
            If you refer 6 clients (say, 2 from each category) , you can earn
            Rs. 258,000 as a referral fee!
          </p>
          <p>
            If you refer 5 Category A clients, you can earn Rs. 275,000 as a
            referral fee!
          </p>
          <p>
            If you refer 5 Category B clients, you can earn Rs. 215,000 as a
            referral fee!
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(4)}
        className="text-[25px] cursor-pointer w-full"
      >
        <p>
          
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 4 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> The Sign-up fee
        </p>
        <div
          className={`${
            open === 4 ? "content show" : "content"
          } px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
            a.A valid signup happens when the employer account is &quot;Activated&quot;
            after the employer has signed-up AND posted job vacancies on
            hiringplug.com.
          </p>
          <p>
            b.hiringplug.com shall duly inform and transfer your signup fee to
            your account.
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(5)}
        className="text-[25px] cursor-pointer w-full bg-slate-100  py-2"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 5 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> The Placement fee
        </p>
        <div
          className={` ${
            open === 5 ? "content show" : "content"
          } px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
            a.&quot;Placement&quot; refers to a candidate starting to work with referred
            employer, after being proposed and duly selected by them on
            hiringplug.com.
          </p>
          <p>
            b.hiringplug.com shall duly inform and transfer your placement fee
            to your account.
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(6)}
        className="text-[25px] cursor-pointer w-full"
      >
        <p>
          
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 6 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> how much can you earn ?
        </p>
        <div
          className={`${
            open === 6 ? "content show" : "content"
          }  px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
            a.You can earn a maximum of Rs. 55,000 for a Category A referral,
            Rs. 43,000 for a Category B referral and Rs. 31,000 for a Category C
            referral.
          </p>
          <p>
            b.Refer to the earning potential illustrations given above as
            examples.
          </p>
          <p className="mt-10">
            Question.What if I&apos;m an agency partner on hiringplug.com?
          </p>
          <p>
            Answer.The referral fee is over and above the handsome commissions
            you already make as an agency partner on hiringplug.com
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(7)}
        className="text-[25px] cursor-pointer w-full bg-slate-100  py-2"
      >
        <p>
          
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 7 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> Scheme validity
        </p>
        <div
          className={` ${
            open === 7 ? "content show" : "content"
          }  px-2 w-full flex-col text-[15px] flex items-start justify-center   `}
        >
          <p>
            a.This scheme is valid from its date of announcement to 31st
            December 2024.
          </p>
          <p>
            b.You may refer until closing hours of 31st December 2024 for
            qualifying for the referral fee
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(8)}
        className="text-[25px] cursor-pointer w-full"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 8 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> Terms and conditions of the
          scheme
        </p>
        <div
          className={`  ${
            open === 8 ? "content show" : "content"
          }  px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
            1.Referral, Signup, activation & placement will all be considered
            valid only after they qualify the various internal processes of
            hiringplug.com, meant for all employers.
          </p>
          <p>
            2.Your referral must be converted to a valid activation within 90
            days for a Category A & B employers and within 30 days for a
            Category C employer from the date of referral to qualify for the
            referral fee.
          </p>
          <p>
            3.You can earn a maximum of 10 (Ten) valid placements per referred
            client made within 12 months from the date of referral. Please check
            for a listing of Fortune 500 company on fortune.com/fortune500.
          </p>
          <p>
            4.By making a referral, you agree that all information provided by
            you is accurate, not a misrepresentation and your that action does
            not violate any legal, moral or ethical conditions in any way.
          </p>
          <p>
            5.Your referral shall be considered valid, only after our team
            establishing adequate connection, knowledge, influence and your
            active role in facilitating the conversion of the lead.
          </p>
          <p>
            6.Your referral may be declined by the hiringplug.com is it is found
            to be for a company which is already associated, already referred by
            another person and / or does not qualify for being on
            hiringplug.com.
          </p>
          <p>
            7.Once an employer signs-up on hiringplug.com, it shall be goverened
            strictly by the terms & policies of hiringplug.com and the &quot;Referee&quot;
            shall have no authority, whatsoever. 8.All valid and approved
            payments shall be disbursed to your bank account within 30 days from
            the date of confirmation.
          </p>
          <p>
            9.Payments shall be inclusive of GST and subject to TDS, as per
            prevailing norms by Government of India at that time.
          </p>
          <p>
            10.No payment shall be applicable if the proposed candidate either
            does not join or leaves the referred employer, within the
            Replacement period. In the event a fee has already been paid for
            such a placement, it shall be prompty refunded in full to
            hiringplug.com within 7 days of such an intimation.
          </p>
          <p>
            11.You will have to provide a valid invoice for collecting the
            payment and shall be informed by hiringplug.com accordingly.
          </p>
          <p>
            12.hiringplug.com reserves the right to extend, withdraw or modify
            or amend all or part of its terms and conditions at its sole
            discretion without notice.
          </p>
          <p>
            13.hiringplug.com reserves the right to allow / decline access to
            any employer on its platform, or disallow you from participating,
            based on its sole discretion.
          </p>
          <p>
            14.hiringplug.com reserves the right of final decision on the
            interpretation of these terms and conditions. Decisions made by
            hiringplug.com, shall be conclusive, final and binding on all of the
            parties.
          </p>
          <p>
            15.The courts in Delhi, India shall have exclusive jurisdiction in
            relation to all matters arising out of this agreement.
          </p>
          <p>
            16.Any exceptions to these terms shall be considered valid only if
            agreed in writing by the CEO of hiringplug.com.
          </p>
          <p>
            17.&quot;Agreement&quot; - By making a referral, you fully understand and
            unconditionally agree to the terms of this scheme.
          </p>
          <p>
            18.&quot;TalenTECH Solutions Private Limited&quot;, is the legal company name
            that owns hiringplug.com
          </p>
        </div>
      </div>
      <div
        onClick={() => handletoggle(9)}
        className="text-[25px] cursor-pointer w-full bg-slate-100  py-2"
      >
        <p>
          <FontAwesomeIcon icon={faChevronDown} className={`${open === 9 ? 'rotate-[0] font-semibold text-[#00a63f] ' : 'rotate-[270deg]'} transition-all duration-300`} /> Glossary of terms used
        </p>
        <div
          className={` ${
            open === 9 ? "content show" : "content"
          }  px-2 w-full flex-col text-[15px] flex items-start justify-center`}
        >
          <p>
          &quot;CRS&quot; (also generally referred to as &quot;Scheme&quot; in this context) is
            the name of policy created by hiringplug.com for the purposes of
            rewarding you for referring clients.
          </p>
          <p>
          &quot;You&quot; (also referred to as the &quot;Referee&quot;) is an individual or a
            company that provides a lead under this scheme.
          </p>
          <p>
          &quot;fee&quot; (also referred to as &quot;referral fee&quot;) is the amount payable to
            you for a successful referral on hiringplug.com.
          </p>

          <p>
          &quot;Lead&quot; - refers to the details of the company, provided by you as a
            referral under the &quot;Referral scheme&quot; as per the laid down process.
          </p>

          <p>
          &quot;Placement&quot; refers to an event when a candidate proposed towards an
            open job posting on hiringplug.com, that starts to work with the
            &quot;Lead&quot; company.
          </p>

          <p>
          &quot;Signup&quot; (also referred to as &quot;registration&quot;) refers to an employer
            creating an account on hiringplug.com and getting validated as per
            the company&apos;s process.
          </p>

          <p>
          &quot;Employer&quot; (also referred to as &quot;Client&quot;) refers to a company that
            associates with hiringplug.com for the purpose of recruiting
            candidates.
          </p>
          <p>
          &quot;Activation&quot; refers to the event when the employer & their job
            vacancies are made available for the hiringplug.com agencies to work
            on. This is done by hiringplug.com after following its process of
            employer validation.
          </p>
          <p>
          &quot;Category A&quot; refers to a referred employer having more than 10,000
            employees globally at the time of referral.
          </p>
          <p>
          &quot;Category B&quot; refers to a referred employer which is listed in the
            current or preceding year on Fortune 500 list and has below 10,000
            employees globally at the time of referral.
          </p>
          <p>
          &quot;Category C&quot; refers to a referred employer (Non-Fortune 500 company)
            having below 10,000 employees globally at the time of referral.
          </p>
          <p>
          &quot;Party&quot; (Plural &quot;Parties&quot;) refers to either one or a combination of
            you (Referee) and hiringplug.com.
          </p>
        </div>
      </div>
    </div>
  );

        }