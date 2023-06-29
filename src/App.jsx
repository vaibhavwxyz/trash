import "../src/app.css";

function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="left-side">
          <div className="logo">
            <svg
              class="logo-svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  class="svg__path"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M118.781 15.3564C118.781 13.7775 117.851 12.5888 116.383 12.5888C114.915 12.5888 113.984 13.7775 113.984 15.3564C113.984 16.9352 114.915 18.1239 116.383 18.1239C117.854 18.1269 118.781 16.9382 118.781 15.3564ZM118.709 11.5293V7.39303C118.709 7.11988 118.892 6.88275 119.156 6.81371L121.35 6.22839V20.225H118.916V19.0364C118.304 19.9278 117.205 20.4501 115.83 20.4501C113.006 20.4501 111.352 18.1839 111.352 15.3594C111.352 12.5348 113.006 10.2686 115.83 10.2686C117.202 10.2656 118.208 10.8599 118.709 11.5293ZM103.734 10.4877V11.6764C104.181 10.8389 105.184 10.2626 106.633 10.2626C108.975 10.2626 110.22 11.8234 110.22 14.1467V20.225H107.582V14.4469C107.582 13.3122 107.099 12.5318 105.928 12.5318C104.646 12.5318 103.941 13.3483 103.941 14.651V20.225H101.303V10.4877H103.734ZM95.1342 20.4501C92.2917 20.4501 90.7098 19.2225 90.7098 16.0647V10.4877H93.3482V16.1008C93.3482 17.4575 93.9606 18.0878 95.1312 18.0878C96.3018 18.0878 96.9142 17.4545 96.9142 16.1008V10.4877H99.5526V16.0617C99.5586 19.2225 97.9767 20.4501 95.1342 20.4501ZM81.9991 15.3564C81.9991 17.1033 83.0767 18.1239 84.4694 18.1239C85.8622 18.1239 86.9398 17.1003 86.9398 15.3564C86.9398 13.6124 85.8622 12.5888 84.4694 12.5888C83.0797 12.5888 81.9991 13.6094 81.9991 15.3564ZM84.4724 20.4501C81.3507 20.4501 79.3606 18.1269 79.3606 15.3594C79.3606 12.5919 81.3477 10.2686 84.4724 10.2686C87.5941 10.2686 89.5842 12.5919 89.5842 15.3594C89.5812 18.1269 87.5941 20.4501 84.4724 20.4501ZM71.3193 15.3564C71.3193 16.9352 72.2498 18.1239 73.7176 18.1239C75.1854 18.1239 76.1159 16.9352 76.1159 15.3564C76.1159 13.7775 75.1854 12.5888 73.7176 12.5888C72.2498 12.5888 71.3193 13.7775 71.3193 15.3564ZM71.3943 19.1864V23.2356C71.3943 23.5088 71.2112 23.7459 70.9471 23.8149L68.7559 24.3913V10.4877H71.1902V11.6764C71.8025 10.7849 72.9011 10.2626 74.2759 10.2626C77.1004 10.2626 78.7543 12.5288 78.7543 15.3534C78.7543 18.1779 77.1004 20.4441 74.2759 20.4441C72.8981 20.4501 71.8956 19.8558 71.3943 19.1864ZM60.9186 14.687V20.225H58.2802V14.4469C58.2802 13.3693 57.89 12.5318 56.7193 12.5318C55.4917 12.5318 54.8223 13.3303 54.8223 14.633V20.228H52.1839V10.4877H54.6182V11.6764C55.0654 10.8389 56.032 10.2626 57.4247 10.2626C58.7454 10.2626 59.691 10.7819 60.2493 11.6373C61.1047 10.6888 62.0893 10.2626 63.482 10.2626C65.8233 10.2626 67.0119 11.8805 67.0119 14.1467V20.225H64.3735V14.4469C64.3735 13.3693 63.9833 12.5318 62.8126 12.5318C61.567 12.5318 60.9186 13.3303 60.9186 14.687ZM43.3801 15.3564C43.3801 17.1033 44.4577 18.1239 45.8504 18.1239C47.2432 18.1239 48.3208 17.1003 48.3208 15.3564C48.3208 13.6124 47.2432 12.5888 45.8504 12.5888C44.4577 12.5888 43.3801 13.6094 43.3801 15.3564ZM45.8504 20.4501C42.7287 20.4501 40.7387 18.1269 40.7387 15.3594C40.7387 12.5919 42.7257 10.2686 45.8504 10.2686C48.9751 10.2686 50.9622 12.5919 50.9622 15.3594C50.9622 18.1269 48.9721 20.4501 45.8504 20.4501ZM27.0482 13.6094C27.0482 9.48516 29.8908 6.75068 33.6818 6.75068C36.9716 6.75068 39.574 8.70174 40.0753 11.9165H37.1757C36.7855 10.2626 35.4468 9.33208 33.6818 9.33208C31.2655 9.33208 29.9088 11.004 29.9088 13.6064C29.9088 16.2088 31.2655 17.8807 33.6818 17.8807C35.4468 17.8807 36.7855 16.9502 37.1757 15.2963H40.0753C39.574 18.5111 36.9716 20.4621 33.6818 20.4621C29.8908 20.4681 27.0482 17.7366 27.0482 13.6094Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.08359 21.0428C0.411223 20.6315 0 19.8992 0 19.1127V14.7213C0 14.5532 0.0450245 14.3912 0.12907 14.2471C0.390212 13.7968 0.969527 13.6438 1.41977 13.9079L11.3312 19.686C11.9105 20.0252 12.2677 20.6436 12.2677 21.3159V25.8664C12.2677 26.0735 12.2106 26.2806 12.1026 26.4577C11.7754 26.992 11.079 27.1601 10.5447 26.8329L1.08359 21.0428ZM15.8576 12.7042C16.4369 13.0434 16.7941 13.6618 16.7941 14.3341V23.5671C16.7941 23.8403 16.647 24.0924 16.4099 24.2245L14.2397 25.4462C14.2127 25.4612 14.1827 25.4732 14.1527 25.4822V20.3554C14.1527 19.692 13.8045 19.0767 13.2342 18.7345L4.52946 13.5267V7.73955C4.52946 7.57145 4.57449 7.40937 4.65853 7.26529C4.91967 6.81504 5.49899 6.66196 5.94923 6.9261L15.8576 12.7042ZM20.195 5.88454C20.7773 6.22072 21.1345 6.84506 21.1345 7.51743V21.0038C21.1345 21.2799 20.9814 21.535 20.7383 21.6671L18.6821 22.7777V13.3886C18.6821 12.7253 18.334 12.1129 17.7667 11.7707L8.86982 6.43384V0.943854C8.86982 0.775763 8.91484 0.613675 8.99589 0.469596C9.25703 0.0193519 9.83634 -0.133731 10.2866 0.127411L20.195 5.88454Z"
                  fill="#00D395"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="121" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="compound">Compound</h1>
          </div>
          <ul className="nav-link">
            <li className="links">
              <svg
                class="svg header__links__icon"
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.93042 0.833252C0.93042 0.55711 1.15428 0.333252 1.43042 0.333252H12.4304C12.7066 0.333252 12.9304 0.55711 12.9304 0.833252V2.49992C12.9304 2.77606 12.7066 2.99992 12.4304 2.99992H1.43042C1.15428 2.99992 0.93042 2.77606 0.93042 2.49992V0.833252ZM0.93042 4.83325C0.93042 4.55711 1.15428 4.33325 1.43042 4.33325H7.09709C7.37323 4.33325 7.59709 4.55711 7.59709 4.83325V10.4999C7.59709 10.7761 7.37323 10.9999 7.09709 10.9999H1.43042C1.15428 10.9999 0.93042 10.7761 0.93042 10.4999V4.83325ZM9.43042 4.33325C9.15428 4.33325 8.93042 4.55711 8.93042 4.83325V9.16659C8.93042 9.44273 9.15428 9.66659 9.43042 9.66659H12.4304C12.7066 9.66659 12.9304 9.44273 12.9304 9.16659V4.83325C12.9304 4.55711 12.7066 4.33325 12.4304 4.33325H9.43042Z"
                  fill="#7A8A99"
                />
              </svg>
              Dashboard
            </li>
            <li className="market">
              <svg
                class="svg header__links__icon"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.83331 0.5C4.83331 0.223858 5.05717 0 5.33331 0H7.66665C7.94279 0 8.16665 0.223858 8.16665 0.5V11.5C8.16665 11.7761 7.94279 12 7.66665 12H5.33331C5.05717 12 4.83331 11.7761 4.83331 11.5V0.5ZM0.166647 4.5C0.166647 4.22386 0.390505 4 0.666647 4H2.99998C3.27612 4 3.49998 4.22386 3.49998 4.5V11.5C3.49998 11.7761 3.27612 12 2.99998 12H0.666646C0.390504 12 0.166647 11.7761 0.166647 11.5V4.5ZM9.99998 1.33333C9.72384 1.33333 9.49998 1.55719 9.49998 1.83333V11.5C9.49998 11.7761 9.72384 12 9.99998 12H12.3333C12.6095 12 12.8333 11.7761 12.8333 11.5V1.83333C12.8333 1.55719 12.6095 1.33333 12.3333 1.33333H9.99998Z"
                  fill="#6D7E8F"
                />
              </svg>
              Markets
            </li>
            <li>
              <svg
                class="svg header__links__icon"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.35355 3.34635C6.15829 3.54161 6.15829 3.85819 6.35355 4.05346L8.94628 6.64618C9.14154 6.84144 9.45812 6.84144 9.65338 6.64618L12.2461 4.05346C12.4414 3.85819 12.4414 3.54161 12.2461 3.34635L9.65338 0.753624C9.45812 0.558362 9.14154 0.558362 8.94628 0.753624L6.35355 3.34635Z"
                  fill="#7A8A99"
                />
                <path
                  d="M0.5 0.999592C0.223858 0.999592 0 1.22345 0 1.49959V5.83292C0 6.10907 0.223858 6.33292 0.5 6.33292H4.83333C5.10948 6.33292 5.33333 6.10907 5.33333 5.83292V1.49959C5.33333 1.22345 5.10948 0.999592 4.83333 0.999592H0.5Z"
                  fill="#7A8A99"
                />
                <path
                  d="M0.5 7.66643C0.223858 7.66643 0 7.89029 0 8.16643V12.4998C0 12.7759 0.223858 12.9998 0.5 12.9998H4.83333C5.10948 12.9998 5.33333 12.7759 5.33333 12.4998V8.16643C5.33333 7.89029 5.10948 7.66643 4.83333 7.66643H0.5Z"
                  fill="#7A8A99"
                />
                <path
                  d="M6.66667 8.16636C6.66667 7.89021 6.89052 7.66636 7.16667 7.66636H11.5C11.7761 7.66636 12 7.89021 12 8.16636V12.4997C12 12.7758 11.7761 12.9997 11.5 12.9997H7.16667C6.89052 12.9997 6.66667 12.7758 6.66667 12.4997V8.16636Z"
                  fill="#7A8A99"
                />
              </svg>
              Extensions
            </li>
            <li>
              <svg
                class="svg header__links__icon"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 12C9.81371 12 12.5 9.31371 12.5 6C12.5 2.68629 9.81371 0 6.5 0C3.18629 0 0.5 2.68629 0.5 6C0.5 9.31371 3.18629 12 6.5 12ZM4.29636 5.41074L5.82843 6.94281L8.77471 3.99653C8.96997 3.80127 9.28655 3.80127 9.48181 3.99653L9.71751 4.23223C9.91278 4.4275 9.91278 4.74408 9.71751 4.93934L6.18198 8.47487C5.98672 8.67014 5.67014 8.67014 5.47487 8.47487L3.35355 6.35355C3.15829 6.15829 3.15829 5.84171 3.35355 5.64645L3.58926 5.41074C3.78452 5.21548 4.1011 5.21548 4.29636 5.41074Z"
                  fill="#6D7E8F"
                />
              </svg>
              Vote
            </li>
          </ul>
        </div>
        <div className="right-side">
          <div className="right-side-text-container">
            <svg
              className="blue-img"
              width="24"
              height="24"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 95C57.2957 95 66.3827 92.2435 74.1118 87.0791C81.8409 81.9147 87.865 74.5743 91.4223 65.9861C94.9796 57.398 95.9104 47.9479 94.0969 38.8308C92.2834 29.7137 87.8071 21.3391 81.234 14.766C74.6609 8.19293 66.2863 3.71662 57.1692 1.90311C48.0521 0.0896077 38.602 1.02036 30.0139 4.57768C21.4257 8.135 14.0854 14.1591 8.92093 21.8882C3.7565 29.6173 1 38.7043 1 48C1 60.4652 5.95177 72.4198 14.766 81.234C23.5802 90.0482 35.5348 95 48 95Z"
                fill="#2775C9"
              />
              <path
                d="M60.9433 55.4691C60.9433 48.615 56.7721 46.3041 48.7037 45.1977C42.7406 44.336 41.595 42.9358 41.595 40.155C41.595 37.3741 43.6121 35.641 47.47 35.641C50.9852 35.641 53.0121 36.865 53.8444 39.6948C53.9327 40.0045 54.1186 40.2775 54.3743 40.4732C54.6301 40.669 54.9421 40.7772 55.2642 40.7816H58.3485C58.55 40.7858 58.7499 40.7455 58.934 40.6637C59.1181 40.5818 59.2819 40.4603 59.4138 40.3079C59.5456 40.1555 59.6422 39.9759 59.6967 39.782C59.7512 39.588 59.7623 39.3843 59.7292 39.1856C58.75 34.7108 55.7342 32.0181 51.0048 31.176V26.4564C51.0048 26.0669 50.85 25.6933 50.5746 25.4179C50.2992 25.1424 49.9256 24.9877 49.536 24.9877H46.5985C46.209 24.9877 45.8354 25.1424 45.56 25.4179C45.2845 25.6933 45.1298 26.0669 45.1298 26.4564V31.0095C39.2548 31.832 35.5437 35.7095 35.5437 40.6837C35.5437 47.1168 39.4604 49.6137 47.6462 50.7202C53.2177 51.6308 54.8039 52.8352 54.8039 55.9979C54.8039 59.1606 52.1112 61.2854 48.3121 61.2854C43.191 61.2854 41.4579 59.0431 40.8802 56.135C40.813 55.8013 40.6335 55.5007 40.3716 55.2833C40.1097 55.0659 39.7812 54.9449 39.4408 54.9404H36.0921C35.8923 54.9391 35.6946 54.9815 35.5129 55.0647C35.3312 55.1478 35.1698 55.2697 35.0402 55.4217C34.9105 55.5738 34.8157 55.7523 34.7623 55.9449C34.7089 56.1374 34.6982 56.3393 34.731 56.5364C35.5829 61.4323 38.726 65.016 45.1298 65.8777V70.5189C45.1298 70.9085 45.2845 71.2821 45.56 71.5575C45.8354 71.8329 46.209 71.9877 46.5985 71.9877H49.536C49.9256 71.9877 50.2992 71.8329 50.5746 71.5575C50.85 71.2821 51.0048 70.9085 51.0048 70.5189V65.8777C57.0756 64.9181 60.9433 60.7273 60.9433 55.4691Z"
                fill="white"
              />
              <path
                d="M37.9909 76.0806C32.3332 74.0147 27.4474 70.2595 23.9953 65.3239C20.5432 60.3883 18.6917 54.5108 18.6917 48.4877C18.6917 42.4647 20.5432 36.5872 23.9953 31.6516C27.4474 26.7159 32.3332 22.9608 37.9909 20.8948C38.3536 20.7356 38.6643 20.4777 38.8877 20.1505C39.111 19.8233 39.2379 19.44 39.254 19.0442V16.3025C39.2775 16.0597 39.2368 15.815 39.1358 15.593C39.0348 15.371 38.8772 15.1794 38.6788 15.0375C38.4804 14.8956 38.2481 14.8085 38.0053 14.7847C37.7626 14.761 37.5178 14.8016 37.2957 14.9023C30.1709 17.1731 23.9529 21.6509 19.5405 27.6883C15.1281 33.7257 12.75 41.0098 12.75 48.4877C12.75 55.9656 15.1281 63.2498 19.5405 69.2872C23.9529 75.3246 30.1709 79.8023 37.2957 82.0731C37.5178 82.1739 37.7626 82.2145 38.0053 82.1907C38.2481 82.167 38.4804 82.0798 38.6788 81.938C38.8772 81.7961 39.0348 81.6045 39.1358 81.3825C39.2368 81.1604 39.2775 80.9157 39.254 80.6729V77.9313C39.2379 77.5355 39.111 77.1521 38.8877 76.8249C38.6643 76.4978 38.3536 76.2399 37.9909 76.0806V76.0806Z"
                fill="white"
              />
              <path
                d="M58.8368 14.9023C58.6147 14.8016 58.3699 14.761 58.1272 14.7847C57.8844 14.8085 57.6522 14.8956 57.4537 15.0375C57.2553 15.1794 57.0977 15.371 56.9967 15.593C56.8958 15.815 56.855 16.0597 56.8785 16.3025V19.0442C56.8946 19.44 57.0215 19.8233 57.2448 20.1505C57.4682 20.4777 57.7789 20.7356 58.1416 20.8948C63.7993 22.9608 68.6852 26.7159 72.1373 31.6516C75.5894 36.5872 77.4408 42.4647 77.4408 48.4877C77.4408 54.5108 75.5894 60.3883 72.1373 65.3239C68.6852 70.2595 63.7993 74.0147 58.1416 76.0806C57.767 76.2229 57.4451 76.4765 57.2192 76.8075C56.9934 77.1384 56.8744 77.5306 56.8785 77.9313V80.6729C56.855 80.9157 56.8958 81.1604 56.9967 81.3825C57.0977 81.6045 57.2553 81.7961 57.4537 81.938C57.6522 82.0798 57.8844 82.167 58.1272 82.1907C58.3699 82.2145 58.6147 82.1739 58.8368 82.0731C65.9616 79.8023 72.1797 75.3246 76.5921 69.2872C81.0044 63.2498 83.3825 55.9656 83.3825 48.4877C83.3825 41.0098 81.0044 33.7257 76.5921 27.6883C72.1797 21.6509 65.9616 17.1731 58.8368 14.9023V14.9023Z"
                fill="white"
              />
            </svg>
            <svg
              className="black-img"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="url(#pattern0)"
              />
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="black"
              />
              <path
                d="M5.07337 9.11596L8.99873 11.3949L9.65349 6.55759L5.07337 9.11596Z"
                fill="#393939"
              />
              <path
                d="M8.99961 2.7197L7.13977 9.27607L12.9245 9.11715L8.99961 2.7197Z"
                fill="#343434"
              />
              <path
                d="M8.99873 2.7197L5.07337 9.11715L8.99873 7.36334V2.7197Z"
                fill="#8C8C8C"
              />
              <path
                d="M8.99873 15.2803L9.09526 12.1778L5.07337 9.84665L8.99873 15.2803Z"
                fill="#8C8C8C"
              />
              <path
                d="M8.99915 12.125V15.2803L12.9266 9.84665L8.99915 12.125Z"
                fill="#3C3C3B"
              />
              <path
                d="M8.99915 11.3959L12.924 9.11697L8.99915 7.36423V11.3959Z"
                fill="#141414"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_2687_20"
                    transform="scale(0.015625)"
                  />
                </pattern>
                <image
                  id="image0_2687_20"
                  width="64"
                  height="64"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h3 className="usdc">USDC</h3>
            <h3 className="ethereum-text">Ethereum</h3>
          </div>
          <button className="connect-btn">Connect Wallet</button>
        </div>
      </div>
    </>
  );
}

export default App;
