import React from 'react';

export default function HomePage() {
     return (
          <>
               <div className="w-full h-full">
                    <div>
                         <div style={{ position: "fixed", zIndex: "9999", inset: "16px", pointerEvents: "none" }}></div>
                    </div>
                    <div className="w-full h-full">
                         <div className="w-full h-full p-0 m-auto">
                              <div className="w-full h-full flex flex-col items-center justify-start">
                                   <div className="Home_overlay_light__eFwQN w-full h-full fixed"></div>
                                   <div className="Home_overlay__sMVTo w-full h-full fixed"></div>
                                   <div className="fixed top-0 z-[90] w-full flex justify-center p-4">
                                        <div
                                             className="backdrop-blur-lg shadow-xl rounded-xl w-[400px] h-[4.5rem] bg-[#1d1f25]/70 border-b-[1px] border-b-[#2b2f3c]/90">
                                             <div className="flex justify-between items-center text-white">
                                                  <div className="flex items-center">
                                                       <div id="logo"
                                                            className="hover:cursor-pointer relative p-3 divide-x flex flex-row space-x-4 items-center">
                                                            <span
                                                                 style={{ boxSizing: "borderBox", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: '100%' }}><span
                                                                      style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                                      <img
                                                                           alt="" aria-hidden="true"
                                                                           src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e"
                                                                           style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} /></span>
                                                                 <img
                                                                      alt="XINU Logo"
                                                                      src="img/xinu.png"
                                                                      decoding="async" data-nimg="intrinsic" className="mr-2"
                                                                      style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                      srcSet="img/xinu.png" /><noscript></noscript></span>
                                                            <h1 className="text-gray-200 font-thin text-xl pl-4">XINU Staking</h1>
                                                       </div>
                                                  </div>
                                                  <div className="flex justify-center items-center p-2 z-[150]"><button
                                                       className="rounded-md border-[1px] border-[#FF5F1F]/70 backdrop-blur-3xl shadow-md font-medium pr-6 pl-6  hover:brightness-150 h-9">
                                                       <div className="flex flex-row justify-center items-center"><span
                                                            className="pr-2"><svg aria-hidden="true" focusable="false"
                                                                 data-prefix="fas" data-icon="link"
                                                                 className="svg-inline--fa fa-link w-4 h-4" role="img"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 640 512">
                                                                 <path fill="currentColor"
                                                                      d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z">
                                                                 </path>
                                                            </svg></span>Connect</div>
                                                  </button></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="fixed top-0 z-50 right-0">
                                        <div className="w-52 h-52 relative"><span
                                             style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}><span
                                                  style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "100% 0px 0px" }}></span>
                                        </span>
                                        </div>
                                   </div>
                                   <div className="mt-32 space-y-3 flex flex-col w-full justify-center items-center">
                                        <div className="flex flex-row  space-x-5 w-[80%]">
                                             <div
                                                  className="p-6 rounded-2xl backdrop-blur-lg bg-[#1f232f]/95 shadow-xl border-[1px] border-gray-600 z-50 w-6/12">
                                                  <div className="text-3xl">
                                                       <h1 className="ml-2"><span className="text-orange-400">Staking</span> Rewards</h1>
                                                  </div>
                                                  <div className="text-gray-200 ml-2">
                                                       <div className="flex flex-col justify-start items-start space-y-3">
                                                            <p>The XINU Staking platform rewards the best performing stakers with a
                                                                 portion of the total XINU supply. The rewards are calculated based
                                                                 on the total amount of XINU staked in the network.</p><button
                                                                      className="p-4 rounded-md font-medium hover:brightness-75 bg-white text-black">Trade
                                                                 on Uniswap</button>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className="p-6 rounded-2xl backdrop-blur-lg bg-[#1f232f]/95 shadow-xl border-[1px] border-gray-600 z-50 w-9/12">
                                                  <div className="text-3xl">
                                                       <h1 className="ml-2"><span className="text-orange-700">Account</span> <span
                                                            className="text-white">Balance</span></h1>
                                                  </div>
                                                  <div className="text-gray-200 ml-2">
                                                       <div className="w-full -ml-1 mt-4 flex justify-center relative overflow-x-auto shadow-md rounded-lg container">
                                                            <div className="overflow-x-auto w-full">
                                                                 <table className="table w-full">
                                                                      <thead className='text-base uppercase bg-gray-700 text-gray-400 w-32'>
                                                                           <tr className='flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                                                                                <th className='p-3 text-center bg-gray-700 text-base'>TOTAL DEPOSITED	</th>
                                                                                <th className='p-3 text-center bg-gray-700 text-base'>TOTAL COMMITTED	</th>
                                                                                <th className='p-3 text-center bg-gray-700 text-base'>XINU REWARDS </th>
                                                                                <th className='p-3 text-center bg-gray-700 text-base'>APR </th>
                                                                           </tr>
                                                                      </thead>
                                                                      <tbody>
                                                                           <tr>
                                                                                <th className='text-center'>0 XINU</th>
                                                                                <td className='text-center'>0 XINU</td>
                                                                                <td className='text-center'>No rewards to claim	</td>
                                                                                <td className='text-center'>0%</td>
                                                                           </tr>
                                                                      </tbody>
                                                                 </table>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="w-[800px] flex bg-[#1f232f]/70 h-full z-50 backdrop-blur-md rounded-3xl border-[1px] border-gray-600">
                                             <div className="flex flex-col justify-start items-start w-full">
                                                  <div
                                                       className="font-thin bg-black/10 w-full h-20 rounded-t-3xl flex flex-row items-center justify-center">
                                                       <div className="w-full h-20 rounded-t-3xl">
                                                            <div
                                                                 className="hover:bg-black/50 hover:cursor-pointer bg-black/10 border-b-gray-500 h-full w-full p-6 flex flex-row justify-center items-center space-x-4 border-b-2 rounded-tl-3xl">
                                                                 <div className="bg-[#2d323d] p-3 rounded-xl"><svg aria-hidden="true"
                                                                      focusable="false" data-prefix="fas"
                                                                      data-icon="hand-holding-dollar"
                                                                      className="svg-inline--fa fa-hand-holding-dollar w-8 h-8"
                                                                      role="img" xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 576 512">
                                                                      <path fill="currentColor"
                                                                           d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z">
                                                                      </path>
                                                                 </svg></div>
                                                                 <div className="text-left">
                                                                      <h1 className="text-2xl">Stake</h1>
                                                                      <p className="text-sm text-gray-400">Stake XINU to earn rewards.
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="w-full h-20 rounded-t-3xl">
                                                            <div
                                                                 className="hover:bg-black/50 hover:cursor-pointer bg-black/10 border-b-gray-500 h-full w-full p-6 flex flex-row justify-center items-center space-x-4 border-b-2">
                                                                 <div className="bg-orange-500 p-3 rounded-xl"><svg aria-hidden="true"
                                                                      focusable="false" data-prefix="fas" data-icon="lock"
                                                                      className="svg-inline--fa fa-lock w-8 h-8" role="img"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 448 512">
                                                                      <path fill="currentColor"
                                                                           d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
                                                                      </path>
                                                                 </svg></div>
                                                                 <div className="text-left">
                                                                      <h1 className="text-2xl">Commit</h1>
                                                                      <p className="text-sm text-gray-400">Lock your tokens for
                                                                           bonuses.</p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="w-full h-20 rounded-t-3xl">
                                                            <div
                                                                 className="hover:bg-black/50 hover:cursor-pointer bg-black/10  border-b-orange-500 h-full w-full p-6 flex flex-row justify-center items-center space-x-4 border-b-2 rounded-tr-3xl">
                                                                 <div className="bg-orange-500 p-3 rounded-xl"><svg aria-hidden="true"
                                                                      focusable="false" data-prefix="fas" data-icon="coins"
                                                                      className="svg-inline--fa fa-coins w-8 h-8" role="img"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 512 512">
                                                                      <path fill="currentColor"
                                                                           d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z">
                                                                      </path>
                                                                 </svg></div>
                                                                 <div className="text-left">
                                                                      <h1 className="text-2xl">Unstake</h1>
                                                                      <p className="text-sm text-gray-400">Remove uncommitted XINU from
                                                                           the platform.</p>
                                                                 </div>
                                                            </div>
                                                       </div>


                                                  </div>
                                                  <div className="w-full p-4 space-y-4 bg-[#161a23] rounded-b-3xl">
                                                       <form className="space-y-3">
                                                            <div className="flex flex-row justify-between m-0"><label
                                                                 htmlFor="amount_Amount to unstake"
                                                                 className="block ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Amount
                                                                 to unstake </label>
                                                                 <div id="label"
                                                                      className="flex flex-row items-center justify-end space-x-2">
                                                                      <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                                           data-icon="coins"
                                                                           className="svg-inline--fa fa-coins w-4 h-4" role="img"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           viewBox="0 0 512 512">
                                                                           <path fill="currentColor"
                                                                                d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z">
                                                                           </path>
                                                                      </svg><label htmlFor="amount_Amount to unstake"
                                                                           className="mr-2 block text-sm font-medium text-gray-900 dark:text-gray-300">0
                                                                           XINU total staked</label></div>
                                                            </div>
                                                            <div
                                                                 className="rounded-lg flex space-x-1 justify-end items-center border-[1px] border-gray-500/50 bg-slate-700 brightness-50">
                                                                 <input disabled="" min="1" pattern="[0-9]" max="0" type="number"
                                                                      step="0.000001" id="amount_Amount to unstake"
                                                                      className="rounded-lg w-full h-14 p-4 text-xl text-zinc-200 font-medium bg-slate-700 focus:outline-none"
                                                                      placeholder="0" defaultValue="0" />
                                                                 <div className="flex flex-row justify-center items-center w-44">
                                                                      <button type="button" disabled=""
                                                                           className="bg-slate-800 p-4 rounded-md">Max</button>
                                                                      <div className="mt-2 p-2 w-14"><span
                                                                           style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}><span
                                                                                style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                                                <img
                                                                                     alt="" aria-hidden="true"
                                                                                     src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2742%27%20height=%2742%27/%3e"
                                                                                     style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} /></span>
                                                                           <img
                                                                                alt="coin"
                                                                                srcSet="img/xinu.png"
                                                                                src="img/xinu.png"
                                                                                decoding="async" data-nimg="intrinsic"
                                                                                style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} /></span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="flex flex-col space-y-3 justify-center items-center">
                                                                 <button type="submit" disabled=""
                                                                      className="p-4 rounded-md font-medium hover:brightness-75 bg-orange-600 text-white border-[1px] border-black brightness-50 hover:brightness-50 w-[50%]">
                                                                      <div
                                                                           className="flex flex-row items-center justify-center space-x-3">
                                                                           <svg aria-hidden="true" focusable="false"
                                                                                data-prefix="fas" data-icon="coins"
                                                                                className="svg-inline--fa fa-coins w-5 h-5" role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 512 512">
                                                                                <path fill="currentColor"
                                                                                     d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z">
                                                                                </path>
                                                                           </svg>
                                                                           <h1 className="text-xl">Unstake</h1>
                                                                      </div>
                                                                 </button>
                                                                 <p className="font-medium text-base">Please connect your wallet to be
                                                                      able to perform this action</p>
                                                            </div>
                                                       </form>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="w-full bg-black/5 bottom-1 fixed h-20 m-0 flex justify-end items-end pr-8 z-[60]">
                              <div className="flex flex-row justify-center items-center hover:cursor-pointer">
                                   <div className="w-[68px] h-[68px] hover:animate-pulse"><span
                                        style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}><span
                                             style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "100% 0px 0px" }}></span>
                                        <img
                                             alt="vidya-logo"
                                             src="/_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=3840&amp;q=75"
                                             decoding="async" data-nimg="responsive"
                                             style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }}
                                             sizes="100vw"
                                             srcSet="/_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fimages%2Fvidya-logo.png&amp;w=3840&amp;q=75 3840w" /><noscript></noscript></span>
                                   </div>
                                   <div className="flex flex-col mt-2 z-[60]">
                                        <h1 className="text-white font-medium text-xs">Powered by</h1>
                                        <h1 className="text-indigo-300 font-medium text animate-puls">VIDYA</h1>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div >
          </>
     )
}