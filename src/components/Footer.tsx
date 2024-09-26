

import React from 'react'

export const Footer = () => {



  return (
    <div 
    
    className=" mt-16 max-w-full bg-[#2F4858] flex flex-row items-center justify-center gap-2 font-buenard text-white p-4">
    <p className="max-w-28  font-bold text-lg text-pretty  ">LEVEL UP 2024 © Todos los derechos reservados</p>
    <div className="flex flex-col flex-wrap items-center gap-8 w-48  space-y-2">
       <div className="flex flex-row items-center gap-4 justify-center">
       {/* Facebook */}
       <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_220)">
            <path d="M15.5 0C6.93966 0 0 6.93966 0 15.5C0 22.7689 5.00464 28.8684 11.7558 30.5437V20.2368H8.55972V15.5H11.7558V13.459C11.7558 8.18338 14.1434 5.7381 19.3229 5.7381C20.305 5.7381 21.9995 5.93092 22.6926 6.12312V10.4166C22.3268 10.3782 21.6913 10.359 20.9021 10.359C18.3607 10.359 17.3786 11.3218 17.3786 13.8248V15.5H22.4415L21.5717 20.2368H17.3786V30.8865C25.0536 29.9596 31.0006 23.4248 31.0006 15.5C31 6.93966 24.0603 0 15.5 0Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_102_220">
            <rect width="31" height="31" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        {/* Instagram */}
        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_222)">
            <path d="M15.5 2.79121C19.6414 2.79121 20.1318 2.80937 21.7605 2.88203C23.2742 2.94863 24.0916 3.20293 24.6365 3.41484C25.357 3.69336 25.8777 4.03242 26.4166 4.57129C26.9615 5.11621 27.2945 5.63086 27.573 6.35137C27.785 6.89629 28.0393 7.71973 28.1059 9.22734C28.1785 10.8621 28.1967 11.3525 28.1967 15.4879C28.1967 19.6293 28.1785 20.1197 28.1059 21.7484C28.0393 23.2621 27.785 24.0795 27.573 24.6244C27.2945 25.3449 26.9555 25.8656 26.4166 26.4045C25.8717 26.9494 25.357 27.2824 24.6365 27.5609C24.0916 27.7729 23.2682 28.0271 21.7605 28.0938C20.1258 28.1664 19.6354 28.1846 15.5 28.1846C11.3586 28.1846 10.8682 28.1664 9.23945 28.0938C7.72578 28.0271 6.9084 27.7729 6.36348 27.5609C5.64297 27.2824 5.12227 26.9434 4.5834 26.4045C4.03848 25.8596 3.70547 25.3449 3.42695 24.6244C3.21504 24.0795 2.96074 23.2561 2.89414 21.7484C2.82148 20.1137 2.80332 19.6232 2.80332 15.4879C2.80332 11.3465 2.82148 10.8561 2.89414 9.22734C2.96074 7.71367 3.21504 6.89629 3.42695 6.35137C3.70547 5.63086 4.04453 5.11016 4.5834 4.57129C5.12832 4.02637 5.64297 3.69336 6.36348 3.41484C6.9084 3.20293 7.73184 2.94863 9.23945 2.88203C10.8682 2.80937 11.3586 2.79121 15.5 2.79121ZM15.5 0C11.292 0 10.7652 0.0181641 9.1123 0.0908203C7.46543 0.163477 6.3332 0.429883 5.35234 0.811328C4.3291 1.21094 3.46328 1.7377 2.60352 2.60352C1.7377 3.46328 1.21094 4.3291 0.811328 5.34629C0.429883 6.3332 0.163477 7.45937 0.0908203 9.10625C0.0181641 10.7652 0 11.292 0 15.5C0 19.708 0.0181641 20.2348 0.0908203 21.8877C0.163477 23.5346 0.429883 24.6668 0.811328 25.6477C1.21094 26.6709 1.7377 27.5367 2.60352 28.3965C3.46328 29.2562 4.3291 29.7891 5.34629 30.1826C6.3332 30.5641 7.45937 30.8305 9.10625 30.9031C10.7592 30.9758 11.2859 30.9939 15.4939 30.9939C19.702 30.9939 20.2287 30.9758 21.8816 30.9031C23.5285 30.8305 24.6607 30.5641 25.6416 30.1826C26.6588 29.7891 27.5246 29.2562 28.3844 28.3965C29.2441 27.5367 29.777 26.6709 30.1705 25.6537C30.552 24.6668 30.8184 23.5406 30.891 21.8938C30.9637 20.2408 30.9818 19.7141 30.9818 15.5061C30.9818 11.298 30.9637 10.7713 30.891 9.11836C30.8184 7.47148 30.552 6.33926 30.1705 5.3584C29.7891 4.3291 29.2623 3.46328 28.3965 2.60352C27.5367 1.74375 26.6709 1.21094 25.6537 0.817383C24.6668 0.435937 23.5406 0.169531 21.8938 0.096875C20.2348 0.0181641 19.708 0 15.5 0Z" fill="white"/>
            <path d="M15.5 7.53809C11.1043 7.53809 7.53809 11.1043 7.53809 15.5C7.53809 19.8957 11.1043 23.4619 15.5 23.4619C19.8957 23.4619 23.4619 19.8957 23.4619 15.5C23.4619 11.1043 19.8957 7.53809 15.5 7.53809ZM15.5 20.6646C12.6482 20.6646 10.3354 18.3518 10.3354 15.5C10.3354 12.6482 12.6482 10.3354 15.5 10.3354C18.3518 10.3354 20.6646 12.6482 20.6646 15.5C20.6646 18.3518 18.3518 20.6646 15.5 20.6646Z" fill="white"/>
            <path d="M25.6355 7.22317C25.6355 8.25247 24.8 9.08196 23.7768 9.08196C22.7475 9.08196 21.918 8.24641 21.918 7.22317C21.918 6.19387 22.7535 5.36438 23.7768 5.36438C24.8 5.36438 25.6355 6.19993 25.6355 7.22317Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_102_222">
            <rect width="31" height="31" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        {/* Wasap */}
        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30.9999L2.17904 23.0394C0.834415 20.7092 0.127875 18.0678 0.129166 15.3592C0.133041 6.89103 7.02407 0 15.4909 0C19.5997 0.00129166 23.4566 1.60166 26.3577 4.50532C29.2575 7.40898 30.854 11.2685 30.8527 15.3734C30.8488 23.8428 23.9578 30.7338 15.4909 30.7338C12.9205 30.7326 10.3876 30.088 8.14394 28.8635L0 30.9999ZM8.52111 26.0826C10.6859 27.3678 12.7526 28.1376 15.4858 28.1389C22.5227 28.1389 28.2551 22.4117 28.259 15.3708C28.2616 8.31573 22.5563 2.59624 15.4961 2.59366C8.45394 2.59366 2.72541 8.3209 2.72283 15.3605C2.72154 18.2344 3.5637 20.3863 4.97807 22.6377L3.6877 27.3497L8.52111 26.0826ZM23.2293 19.0249C23.1337 18.8647 22.878 18.7692 22.493 18.5767C22.1094 18.3843 20.2223 17.4555 19.8697 17.3277C19.5183 17.1998 19.2626 17.1352 19.0055 17.5201C18.7498 17.9038 18.0135 18.7692 17.7901 19.0249C17.5666 19.2807 17.3419 19.313 16.9583 19.1205C16.5746 18.928 15.3372 18.5238 13.8712 17.2153C12.7306 16.1975 11.9595 14.9407 11.7361 14.5558C11.5126 14.1721 11.7128 13.9642 11.904 13.773C12.0771 13.6012 12.2876 13.3248 12.4801 13.1001C12.6751 12.8779 12.7384 12.7177 12.8676 12.4607C12.9954 12.2049 12.9321 11.9802 12.8353 11.7877C12.7384 11.5966 11.9711 9.70685 11.6521 8.93831C11.3395 8.19044 11.0231 8.29119 10.788 8.27956L10.0517 8.26665C9.79598 8.26665 9.38006 8.36223 9.02873 8.74715C8.6774 9.13206 7.6854 10.0595 7.6854 11.9492C7.6854 13.8389 9.06102 15.664 9.25219 15.9198C9.44464 16.1755 11.9582 20.0531 15.8087 21.7155C16.7245 22.1107 17.44 22.3471 17.9967 22.524C18.9164 22.8159 19.7534 22.7746 20.4147 22.6764C21.1523 22.5667 22.6855 21.7477 23.0058 20.8513C23.3262 19.9536 23.3262 19.1851 23.2293 19.0249Z" fill="white"/>
        </svg>
    
       </div>
        <div className="flex flex-row items-center gap-4 justify-center">
        {/* Spotify */}
        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4526 0C6.91854 0 0 6.91835 0 15.4524C0 23.9868 6.91854 30.9046 15.4526 30.9046C23.9875 30.9046 30.9053 23.9868 30.9053 15.4524C30.9053 6.9189 23.9875 0.000738091 15.4524 0.000738091L15.4526 0ZM22.539 22.2868C22.2622 22.7407 21.6681 22.8846 21.2141 22.606C17.586 20.3899 13.0187 19.888 7.63984 21.1169C7.12151 21.235 6.60485 20.9102 6.48675 20.3917C6.3681 19.8732 6.69157 19.3565 7.21119 19.2385C13.0975 17.8931 18.1466 18.4727 22.2198 20.9619C22.6737 21.2405 22.8177 21.8329 22.539 22.2868ZM24.4304 18.0787C24.0816 18.6461 23.3399 18.8251 22.7734 18.4764C18.6197 15.9227 12.2882 15.1834 7.37523 16.6747C6.73807 16.8671 6.06511 16.5081 5.87173 15.872C5.67983 15.2348 6.0391 14.5632 6.67515 14.3694C12.2871 12.6666 19.2637 13.4915 24.0337 16.4226C24.6002 16.7714 24.7791 17.513 24.4304 18.0787ZM24.5928 13.6974C19.6125 10.7393 11.3956 10.4673 6.64064 11.9105C5.87708 12.142 5.06961 11.711 4.83821 10.9474C4.60682 10.1835 5.0375 9.37658 5.80161 9.14445C11.26 7.48742 20.334 7.80757 26.0679 11.2115C26.7561 11.6191 26.9813 12.5061 26.5735 13.192C26.1675 13.8788 25.2781 14.1052 24.5935 13.6974H24.5928Z" fill="white"/>
        </svg>
        {/* Github */}
        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_230)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5128 0C6.93463 0 0 6.98576 0 15.6281C0 22.5364 4.44326 28.3841 10.6072 30.4538C11.3779 30.6094 11.6602 30.1175 11.6602 29.7038C11.6602 29.3414 11.6348 28.0996 11.6348 26.8056C7.31948 27.7373 6.42086 24.9426 6.42086 24.9426C5.72737 23.1314 4.69983 22.6659 4.69983 22.6659C3.28743 21.7086 4.80271 21.7086 4.80271 21.7086C6.36942 21.8121 7.19152 23.3127 7.19152 23.3127C8.57819 25.693 10.8127 25.0204 11.7116 24.6064C11.8399 23.5972 12.2511 22.8987 12.6877 22.5106C9.24597 22.1483 5.6248 20.8029 5.6248 14.8C5.6248 13.0923 6.24082 11.6951 7.21692 10.6085C7.06292 10.2205 6.52343 8.61598 7.37124 6.46849C7.37124 6.46849 8.68107 6.05443 11.6345 8.07268C12.8989 7.73059 14.2029 7.55656 15.5128 7.5551C16.8227 7.5551 18.1579 7.73641 19.3909 8.07268C22.3446 6.05443 23.6544 6.46849 23.6544 6.46849C24.5022 8.61598 23.9624 10.2205 23.8084 10.6085C24.8102 11.6951 25.4008 13.0923 25.4008 14.8C25.4008 20.8029 21.7797 22.1223 18.3122 22.5106C18.8774 23.0022 19.3652 23.9335 19.3652 25.4085C19.3652 27.5042 19.3397 29.1862 19.3397 29.7034C19.3397 30.1175 19.6224 30.6094 20.3927 30.4541C26.5567 28.3838 30.9999 22.5364 30.9999 15.6281C31.0253 6.98576 24.0653 0 15.5128 0Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_102_230">
            <rect width="31" height="31" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        {/* Youtube */}
        <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.6912 9.30007C30.6912 9.30007 30.3885 7.16277 29.4561 6.22429C28.2754 4.98914 26.9555 4.98308 26.35 4.91042C22.0148 4.59558 15.5061 4.59558 15.5061 4.59558H15.4939C15.4939 4.59558 8.98516 4.59558 4.65 4.91042C4.04453 4.98308 2.72461 4.98914 1.54395 6.22429C0.611523 7.16277 0.314844 9.30007 0.314844 9.30007C0.314844 9.30007 0 11.8128 0 14.3194V16.6686C0 19.1753 0.308789 21.688 0.308789 21.688C0.308789 21.688 0.611523 23.8253 1.53789 24.7637C2.71855 25.9989 4.26855 25.9565 4.95879 26.0897C7.44121 26.3259 15.5 26.3985 15.5 26.3985C15.5 26.3985 22.0148 26.3864 26.35 26.0776C26.9555 26.005 28.2754 25.9989 29.4561 24.7637C30.3885 23.8253 30.6912 21.688 30.6912 21.688C30.6912 21.688 31 19.1813 31 16.6686V14.3194C31 11.8128 30.6912 9.30007 30.6912 9.30007ZM12.2971 19.5204V10.8077L20.6707 15.1792L12.2971 19.5204Z" fill="white"/>
        </svg>
        </div>
    </div>
    <ul className="flex flex-col items-start gap-2 justify-center">
        <li>
            <a href="#">Publica un producto</a>
        </li>    
        <li>
            <a href="#">Términos y condiciones</a>    
        </li>    
        <li>
            <a href="#">Política de privacidad</a>    
        </li>    
    </ul>
</div>
  )
}
