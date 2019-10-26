// react libraries
import React from "react";
import { Link } from 'react-router-dom'

// styles
import './LoginNavigation.scss';

const LoginNavigation = () => {
  return (
    <div className="login-navigation">
      <div>
        <svg width="100" viewBox="0 0 209 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M172.477 153.926L165.961 161.468L185.421 178.282L191.937 170.741L172.477 153.926Z" fill="#B2B2B2" />
          <path d="M207 97.496V98.0797C206.987 99.5454 206.945 101.005 206.874 102.457C205.61 127.315 194.885 150.748 176.9 167.953C158.914 185.159 135.028 194.835 110.138 194.998C85.2474 195.161 61.2372 185.798 43.0278 168.829C24.8184 151.86 13.7887 128.569 12.1991 103.73C12.0665 101.668 12.0001 99.5897 12.0001 97.4961C11.9652 77.303 18.2325 57.6023 29.9282 41.1408C30.8634 39.8143 31.8362 38.5122 32.8465 37.2344C33.5429 36.3456 34.2593 35.4768 34.9823 34.6146C51.4411 15.117 74.8866 2.84679 100.289 0.436377C125.691 -1.97404 151.026 5.6674 170.859 21.7213C172.033 22.6697 173.187 23.6513 174.314 24.6528C175.216 25.4553 176.103 26.2755 176.974 27.1134C194.13 43.5227 204.689 65.6411 206.662 89.2984C206.887 92.0044 207 94.7369 207 97.496Z" fill="#3F3D56" />
          <path d="M110.018 207.999C49.3542 207.999 9.18442e-05 158.602 9.18442e-05 97.8836C-0.0358093 70.1036 10.4546 43.3434 29.3555 23L31.7919 25.2631C13.4621 44.9916 3.28887 70.9432 3.32391 97.8836C3.32391 156.767 51.1869 204.673 110.018 204.673C124.313 204.721 138.469 201.871 151.633 196.294C164.798 190.718 176.697 182.53 186.614 172.226L189 174.541C178.774 185.167 166.504 193.61 152.93 199.36C139.356 205.11 124.758 208.049 110.018 207.999Z" fill="#B2B2B2" />
          <path d="M33.0912 37.6201C33.1395 37.6402 33.1847 37.667 33.2254 37.6997C33.7555 38.1309 33.0912 38.9601 33.1717 39.6433C33.2656 40.5189 34.4467 40.7113 35.3392 40.7975C36.2317 40.8904 37.359 41.6001 36.9363 42.3829C34.695 43.1457 32.4268 42.3961 30.1386 41.5272C18.3056 57.9911 11.9647 77.6947 12.0001 97.8907C12.0001 99.9869 12.0673 102.065 12.2015 104.126C12.3891 104.261 12.5946 104.371 12.8121 104.451C13.4832 104.703 14.2616 104.657 14.879 105.015C15.3688 105.3 15.6976 105.804 16.1875 106.07C17.59 106.826 19.536 105.373 20.8446 106.275C21.1828 106.58 21.5032 106.903 21.8042 107.244C23.0121 108.279 24.9984 107.582 26.3942 108.358C27.2934 108.856 27.7564 109.851 28.2395 110.753C29.4407 113.008 31.3867 115.224 33.9569 115.403C34.7674 115.366 35.5797 115.393 36.386 115.482C37.1779 115.661 37.9563 116.345 37.8288 117.134C37.6074 118.494 38.2851 119.98 38.1039 121.34C37.7751 123.827 34.2119 124.915 33.9099 127.403C33.9089 127.95 33.8775 128.497 33.8159 129.041C33.6549 129.691 33.1583 130.222 32.9838 130.872C32.6483 132.099 33.5408 133.326 34.5138 134.149C35.4935 134.978 36.6612 135.694 37.198 136.848C37.7617 138.076 37.4866 139.502 37.6677 140.835C38.0704 143.747 40.6136 145.903 43.2307 147.296C44.0694 147.642 44.8141 148.179 45.4049 148.861C46.076 149.823 46.0089 151.09 46.237 152.238C46.7873 155.044 49.1762 157.359 49.2433 160.218C49.2903 162.254 48.1495 164.098 47.465 166.015C46.7609 168.025 46.5516 170.172 46.8544 172.277C50.6806 175.485 54.7476 178.401 59.0205 181C59.2529 180.661 59.4232 180.283 59.5237 179.886C59.6049 179.446 59.5489 178.992 59.3631 178.585C59.1774 178.177 58.8706 177.835 58.4836 177.604C59.2048 177.334 59.8609 176.919 60.4095 176.383C60.6791 176.109 60.8571 175.76 60.9195 175.383C60.9819 175.005 60.9256 174.618 60.7584 174.274C61.9395 174.42 63.342 174.493 64.1204 173.597C64.7445 172.881 64.7042 171.806 64.4559 170.897C64.1152 170.014 63.8897 169.091 63.7849 168.151C66.5212 168.283 69.2638 168.192 71.9851 167.879C71.5913 166.567 70.6959 165.458 69.4888 164.788C70.7235 164.582 71.8442 163.123 72.2334 161.949C72.5699 160.751 72.5884 159.488 72.2871 158.281C72.1937 157.971 72.1799 157.642 72.2468 157.326C72.4453 156.905 72.7943 156.572 73.2265 156.39C75.2665 155.229 77.3065 154.071 79.3464 152.914C79.7104 152.733 80.0415 152.493 80.3262 152.205C80.9637 151.455 80.8697 150.334 80.5409 149.412C80.2121 148.49 79.6887 147.621 79.5612 146.652C79.1854 143.754 82.3259 141.671 83.3862 138.938C83.7466 137.847 83.9411 136.709 83.9632 135.562C84.0505 134.328 84.0572 132.902 83.1043 132.112C82.185 131.349 80.7557 131.522 79.7961 130.812C78.917 130.162 78.615 128.908 77.6554 128.384C76.783 127.907 75.696 128.212 74.723 127.986C73.0185 127.595 71.9448 125.651 70.2001 125.472C69.2203 125.366 68.1064 125.844 67.3011 125.28C66.5898 124.776 66.563 123.774 66.4288 122.925C66.1905 121.603 65.5484 120.384 64.5887 119.433C63.6289 118.482 62.3977 117.844 61.0604 117.605C60.0471 117.446 58.9466 117.506 58.081 116.955C57.2086 116.398 56.8127 115.356 56.1215 114.58C55.021 113.34 53.2762 112.895 51.6456 112.517C49.4312 112.007 47.219 111.494 45.009 110.978C43.8347 110.7 42.3181 110.554 41.6806 111.575C41.4919 111.964 41.3608 112.377 41.2914 112.803C41.0517 113.568 40.5737 114.239 39.9254 114.72C39.2771 115.202 38.4917 115.468 37.6812 115.482C37.1262 114.546 36.2273 113.857 35.1715 113.559C34.4815 113.444 33.8 113.285 33.1315 113.081C32.7823 112.912 32.4717 112.674 32.2187 112.382C31.9657 112.091 31.7756 111.751 31.66 111.384C31.5444 111.017 31.5058 110.63 31.5465 110.248C31.5872 109.866 31.7064 109.496 31.8967 109.161C32.2772 108.488 32.4236 107.71 32.3133 106.946C32.2029 106.183 31.8421 105.476 31.2861 104.935C30.1587 103.934 28.5281 103.688 27.0115 103.788C26.6156 102.932 27.2799 101.97 27.9913 101.347C28.7093 100.73 29.5749 100.12 29.7292 99.1909C29.9775 97.7316 28.0919 96.6238 26.6626 97.0549C25.2332 97.4927 24.3206 98.8658 23.7167 100.219C23.4238 101.018 23.0243 101.774 22.5289 102.468C22.2751 102.811 21.9301 103.078 21.5322 103.24C21.1342 103.401 20.6989 103.451 20.2742 103.383C19.0931 103.085 18.6436 101.698 18.3818 100.531C17.9625 98.9704 17.7504 97.3627 17.7511 95.7482C17.7613 94.1177 18.4164 92.556 19.5763 91.3967C21.5291 89.619 24.5353 89.7914 27.1726 90.0767C26.8901 89.7043 26.7547 89.2428 26.7918 88.7787C26.8288 88.3147 27.0358 87.88 27.3739 87.556C27.7268 87.2462 28.1509 87.0263 28.6093 86.9153C29.0677 86.8043 29.5466 86.8057 30.0044 86.9192C30.7995 87.0819 31.5158 87.5049 32.0377 88.1198C32.7893 89.022 33.004 90.2491 33.5677 91.2707C34.1381 92.2989 35.413 93.1744 36.4532 92.6239C37.3591 92.1463 37.5 90.9125 37.2786 89.9241C37.0504 88.9424 36.5739 87.9805 36.6545 86.9722C36.8088 85.0552 38.8287 83.8944 40.6069 83.105C42.3852 82.3156 44.4185 81.2477 44.7003 79.3373C44.7134 78.9657 44.7859 78.5985 44.9151 78.2494C45.1119 77.9377 45.387 77.6818 45.7136 77.5064C50.9008 74.1168 56.182 70.6807 62.114 68.83C62.4227 68.7305 62.4563 68.8367 62.7717 68.7637C63.2146 68.5116 62.9193 67.8151 62.4965 67.5365C62.0738 67.2579 61.5101 67.039 61.4027 66.5482C61.3289 66.19 61.5437 65.8318 61.5973 65.4669C61.6114 65.2466 61.5705 65.0262 61.4783 64.825C61.3861 64.6239 61.2454 64.4482 61.0686 64.3133C60.8917 64.1785 60.6841 64.0885 60.4639 64.0514C60.2437 64.0143 60.0177 64.0311 59.8056 64.1005C59.3292 63.4769 60.2687 62.7539 61.0336 62.5416C63.3241 61.9214 65.6748 61.5434 68.0461 61.414C68.3198 61.3693 68.6008 61.4159 68.8447 61.5466C69.019 61.7129 69.1224 61.9389 69.1336 62.1782C69.1449 62.4175 69.0631 62.6519 68.905 62.8335C68.5822 63.188 68.2248 63.5101 67.8381 63.7953C67.4531 64.165 67.1781 64.632 67.0432 65.1455C66.9083 65.659 66.9187 66.1993 67.0731 66.7074C68.3145 67.3309 69.6566 67.9743 71.0322 67.7554C72.4012 67.5365 73.6158 66.0109 72.9716 64.797C72.3743 63.6627 70.5692 63.404 70.2606 62.1635C69.8982 60.7108 71.9784 59.4173 71.5087 57.9978C71.3073 57.3742 70.6766 57.0028 70.1934 56.5583C69.6249 56.005 69.2381 55.2951 69.0837 54.5212C68.9293 53.7474 69.0143 52.9455 69.3278 52.2201C68.5422 52.3558 67.7352 52.3038 66.9741 52.0684C66.213 51.833 65.5198 51.421 64.9526 50.8669C63.9057 49.8255 63.0736 48.1738 61.5839 48.2269C60.2217 48.2667 59.0473 49.8388 57.7723 49.3612C57.4569 49.2418 57.1281 49.003 56.8262 49.1423C56.7266 49.2056 56.6428 49.2904 56.5812 49.3904C56.5196 49.4903 56.4817 49.6028 56.4705 49.7194C56.1484 51.2517 56.7054 52.9962 55.8598 54.3229C54.9405 55.7623 52.8133 55.9613 51.6994 57.2615C51.0954 57.9646 50.8605 58.9132 50.3036 59.6561C49.7466 60.3991 48.5723 60.8767 47.9012 60.2266C48.2299 59.5607 48.3199 58.8041 48.1565 58.081C47.9931 57.3579 47.5861 56.7111 47.002 56.2466C46.384 55.8456 45.7164 55.5245 45.0157 55.2914C44.233 54.9649 43.4883 54.5556 42.7946 54.0709C42.4488 53.8627 42.1679 53.5643 41.9826 53.2085C41.836 52.7612 41.855 52.2768 42.0363 51.842C42.376 50.884 42.9735 50.0357 43.7645 49.3882C44.5555 48.7407 45.5101 48.3185 46.5256 48.1672C47.4114 48.0478 48.4447 48.0876 49.0353 47.4176C49.344 47.0661 49.505 46.5287 49.9613 46.3894C50.2488 46.3301 50.548 46.365 50.8136 46.4889C51.9208 46.8736 53.0213 47.2584 54.1285 47.6431C54.4977 47.8105 54.9056 47.877 55.3096 47.8355C55.5098 47.81 55.6927 47.7101 55.8211 47.556C55.9495 47.402 56.0137 47.2055 56.0008 47.0063C55.8934 46.4624 55.0479 46.2037 55.1284 45.6531C55.1675 45.4733 55.2639 45.3105 55.4035 45.1888C56.6003 43.9304 58.0637 42.9491 59.689 42.3149C61.3143 41.6808 63.0612 41.4095 64.8049 41.5206C65.2209 42.2038 64.5633 43.0064 64.0063 43.5835C63.4561 44.1673 63.0132 45.2021 63.6842 45.6465C63.9549 45.7869 64.2578 45.8554 64.5633 45.8455C65.3793 45.9537 66.1724 46.1912 66.912 46.5487C68.0595 47.0395 69.1868 47.5835 70.2873 48.1672C70.1253 47.456 70.1531 46.7154 70.3679 46.018C70.4891 45.6757 70.735 45.3902 71.0575 45.2173C71.3801 45.0444 71.7562 44.9964 72.1126 45.0827C72.7702 45.3347 73.1058 46.1971 73.8104 46.2767C74.7431 46.3828 75.1122 45.0164 74.723 44.1673C74.3338 43.3182 73.5553 42.6151 73.495 41.6798C73.448 41.0562 73.6896 40.2801 73.1863 39.902C73.0074 39.7848 72.8025 39.712 72.5891 39.6898C68.3749 38.9269 64.1585 38.1619 59.9398 37.3946C59.1882 37.2553 58.1078 37.3615 58.0743 38.111C58.0542 38.5356 58.4367 38.9535 58.2689 39.3382C58.0877 39.7495 57.4972 39.7163 57.0678 39.8622C56.7451 40.0069 56.4788 40.2516 56.3093 40.5592C56.1398 40.8668 56.0763 41.2205 56.1283 41.567C56.243 42.2568 56.5137 42.912 56.9201 43.484C56.0947 43.1457 54.8533 43.086 54.0279 42.7411C53.9078 41.7964 53.6642 40.871 53.3032 39.9883C53.2825 39.8478 53.231 39.7135 53.1522 39.5948C53.0734 39.4761 52.9692 39.3759 52.847 39.3013C52.7249 39.2267 52.5876 39.1795 52.445 39.1629C52.3024 39.1464 52.1578 39.1609 52.0215 39.2055C50.9344 39.3714 49.8473 39.5306 48.7602 39.6964C48.4872 39.7092 48.2258 39.8093 48.0153 39.9816C47.5926 40.4261 48.0086 41.1358 47.9952 41.7461C47.9559 42.0873 47.8101 42.408 47.578 42.6636C47.3459 42.9191 47.039 43.0969 46.7 43.1723C46.0171 43.3094 45.3124 43.3003 44.6332 43.1457C43.1099 42.9136 41.5934 42.6814 40.0701 42.4492C41.4147 42.0257 42.6105 41.2346 43.5193 40.1674C44.1232 39.4642 44.4453 38.1508 43.573 37.8192C43.3154 37.7492 43.0465 37.729 42.7811 37.7595C40.7143 37.7727 39.0837 36.068 37.1511 35.3449C36.5434 35.1209 35.9006 35.0041 35.252 35L33.0912 37.6201Z" fill="#BBB9B9" />
          <path d="M206.875 102.761C206.642 103.077 206.336 103.33 205.985 103.499C205.633 103.667 205.245 103.746 204.856 103.728C202.792 103.548 201.921 100.542 199.876 100.202C199.695 100.155 199.504 100.174 199.335 100.255C199.032 100.422 198.979 100.835 198.959 101.182C198.874 102.901 198.801 104.688 199.467 106.274C200.437 108.594 202.95 110.54 202.422 113C199.586 111.674 198.108 108.454 197.442 105.368C196.769 102.281 196.664 99.0418 195.463 96.1222C194.547 97.302 192.634 96.3288 191.803 95.089C191.011 93.9158 190.523 92.5559 189.758 91.3627C188.993 90.1762 187.818 89.1097 186.42 89.0431C184.949 88.9764 183.669 89.9963 182.548 90.9628C181.573 91.691 180.754 92.6117 180.141 93.6691C179.356 95.2689 179.56 97.1487 179.521 98.9285C179.481 100.848 179.079 102.881 177.779 104.294C176.48 105.701 174.085 106.194 172.654 104.921C171.962 104.192 171.469 103.294 171.223 102.315C169.666 97.7318 168.371 93.0625 167.344 88.3298C167.107 89.4097 166.163 90.8028 165.266 90.1696C165.066 89.9972 164.904 89.7836 164.791 89.543C163.116 86.6833 160.022 84.9636 156.889 83.9304C153.763 82.9038 150.471 82.4239 147.378 81.2907C145.643 80.6541 143.985 79.8199 142.437 78.8043C142.044 79.3897 141.814 80.0715 141.772 80.7778C141.731 81.484 141.878 82.1886 142.2 82.8172C142.547 83.4322 143.086 83.914 143.733 84.1876C144.379 84.4612 145.097 84.5114 145.775 84.3303C146.461 84.1037 147.041 83.6237 147.721 83.3838C148.4 83.1505 149.317 83.2638 149.614 83.9304C149.904 84.5636 149.468 85.3302 149.686 85.9968C150.009 87.0033 151.52 87.0833 152.048 88.0032C152.203 88.3674 152.238 88.7723 152.149 89.1586C152.06 89.5448 151.851 89.8921 151.553 90.1496C150.946 90.6497 150.276 91.0666 149.561 91.3894C147.345 92.6359 145.768 94.7623 143.829 96.4154C141.89 98.0752 139.152 99.2818 136.843 98.2219C137.391 95.4022 134.073 93.3358 133.46 90.5295C133.255 89.603 133.361 88.6231 133.077 87.7232C132.662 86.4167 131.514 85.5235 130.577 84.537C129.439 83.3258 128.552 81.8969 127.969 80.3343C127.386 78.7717 127.117 77.107 127.18 75.4381C127.233 74.2782 127.444 73.0984 127.18 71.9652C126.923 70.8387 125.993 69.7455 124.845 69.7922C122.226 69.9122 118.922 70.1121 117.55 67.8524C117.055 67.0459 116.844 65.866 117.556 65.2461C117.835 65.0677 118.146 64.947 118.471 64.891C118.795 64.8349 119.128 64.8446 119.449 64.9195C121.422 65.1128 123.387 65.3127 125.36 65.506C126.738 65.6394 128.229 65.7527 129.416 65.0261C130.604 64.2995 131.118 62.3598 130.016 61.4999C129.218 60.8733 127.78 60.9066 127.543 59.9134C127.352 59.0802 128.262 58.1403 127.767 57.4404C127.418 56.9471 126.626 57.0805 126.145 57.4538C125.724 57.8946 125.268 58.2982 124.779 58.6603C123.836 59.1535 122.715 58.6803 121.699 58.3603C120.683 58.0403 119.324 58.0137 118.836 58.9669C118.282 60.0267 119.318 61.4266 118.777 62.4931C118.051 63.8996 115.61 63.0997 114.595 64.3129C113.434 65.6994 115.386 67.7791 114.997 69.5522C114.496 69.8033 113.939 69.9188 113.381 69.8872C112.822 69.8557 112.281 69.6782 111.811 69.3722C111.35 69.055 110.982 68.6171 110.747 68.1053C110.513 67.5934 110.42 67.0269 110.479 66.4659C110.571 65.666 110.987 64.8461 110.71 64.0929C110.411 63.5112 109.918 63.0553 109.318 62.8064C107.405 61.7332 105.492 60.6644 103.579 59.6001C103.045 60.6 103.718 61.8332 104.562 62.5864C105.4 63.333 106.455 63.8996 107.009 64.8861C107.36 65.5698 107.439 66.3631 107.231 67.1039C107.022 67.8448 106.542 68.4772 105.888 68.8722C105.805 68.9298 105.711 68.9686 105.612 68.9858C105.513 69.0031 105.411 68.9984 105.314 68.9722C105.222 68.918 105.143 68.8458 105.079 68.76C105.016 68.6741 104.97 68.5763 104.945 68.4723C103.935 65.8526 102.412 63.2729 99.9842 61.9065C97.5503 60.5333 94.0609 60.8199 92.4646 63.1196C92.0887 63.6662 91.8314 64.2928 91.5016 64.8727C89.7536 67.9457 85.9938 69.3988 82.4847 69.3055C82.1415 69.3277 81.7994 69.2465 81.5019 69.0722C80.9346 68.6789 80.961 67.839 81.0467 67.1458C81.1721 66.1659 81.2908 65.1927 81.4161 64.2128C81.4191 63.6145 81.648 63.0399 82.0559 62.6063C82.7089 62.0864 83.6456 62.4131 84.4767 62.3997C85.104 62.3715 85.7073 62.1482 86.2043 61.7605C86.7014 61.3727 87.0678 60.8394 87.2537 60.2333C87.4209 59.6217 87.4195 58.9756 87.2498 58.3647C87.0801 57.7538 86.7484 57.2014 86.2907 56.7671C85.9147 56.4072 85.4068 55.9539 85.6047 55.4673C85.6851 55.3332 85.7934 55.2185 85.9221 55.131C86.0508 55.0435 86.1968 54.9854 86.35 54.9607C87.8342 54.5274 89.4106 54.4141 90.8684 53.8942C92.3327 53.3809 93.7509 52.3277 94.1005 50.8012C94.206 50.3346 94.2522 49.768 94.6678 49.5347C94.8776 49.4496 95.1013 49.4044 95.3274 49.4014C96.1205 49.2865 96.8424 48.8761 97.3513 48.2508C97.8603 47.6255 98.1195 46.8304 98.078 46.0218C98.7772 45.5285 99.76 45.8952 100.439 46.4218C101.112 46.9484 101.712 47.6416 102.537 47.8683C104.074 48.2949 105.558 46.915 107.154 46.9084C107.827 46.9084 108.52 47.1484 109.146 46.9151C109.786 46.6818 110.169 46.0418 110.657 45.5686C111.152 45.0886 112.009 44.802 112.464 45.3153C112.332 44.3487 112.207 43.3888 112.075 42.429C112.852 42.6267 113.662 42.6541 114.451 42.5092C115.239 42.3644 115.988 42.0506 116.646 41.5891C114.984 41.0225 113.328 40.4559 111.666 39.8893C111.491 39.8458 111.33 39.7587 111.198 39.636C110.835 39.2427 111.198 38.6294 111.488 38.1828C112.194 37.1096 112.312 35.3432 111.152 34.8099C110.36 34.4433 109.456 34.8833 108.698 35.3099C107.484 35.9898 106.27 36.6764 105.057 37.3563C104.945 38.0562 105.789 38.4561 106.31 38.9227C106.628 39.2074 106.852 39.5825 106.955 39.9988C107.057 40.415 107.033 40.8529 106.884 41.2547C106.736 41.6566 106.47 42.0036 106.123 42.2501C105.776 42.4965 105.362 42.6309 104.938 42.6356C105.177 42.9509 105.343 43.3164 105.424 43.7051C105.505 44.0938 105.499 44.4959 105.406 44.882C104.595 44.942 103.777 45.0019 102.959 45.0619C102.823 45.0893 102.683 45.0893 102.548 45.0618C102.412 45.0344 102.283 44.98 102.168 44.902C101.904 44.6686 101.943 44.2554 101.877 43.9088C101.769 43.4944 101.54 43.1225 101.22 42.841C100.9 42.5594 100.504 42.3811 100.083 42.329C99.2429 42.2335 98.3921 42.3128 97.5833 42.5623C97.2316 42.6875 96.8467 42.678 96.5015 42.5356C96.3057 42.4047 96.1575 42.2128 96.0793 41.989C95.9358 41.5319 95.9114 41.0451 96.0084 40.5757C96.1055 40.1063 96.3208 39.6701 96.6334 39.3093C97.2669 38.5985 97.9647 37.9491 98.7178 37.3696C100.425 35.8596 101.679 33.8969 102.339 31.7036C103.685 31.1304 105.077 30.3572 106.429 29.7839C107.516 29.2748 108.655 28.8881 109.826 28.6307C110.928 28.4607 112.044 28.4071 113.157 28.4707C114.674 28.4974 116.198 28.5241 117.715 28.5574C119.069 28.4999 120.422 28.6965 121.705 29.1373C122.952 29.6573 124.054 30.7838 124.139 32.1436C124.165 32.2986 124.152 32.4577 124.1 32.6058C124.048 32.754 123.959 32.8862 123.843 32.9901C123.667 33.088 123.469 33.1342 123.269 33.1235C122.009 33.1635 121.474 33.4834 120.215 33.5301C121.013 34.39 121.91 35.2965 123.071 35.4498C125.116 35.7165 126.587 33.5767 127.53 31.717C127.563 32.1904 127.779 32.6317 128.13 32.9468C128.481 33.2618 128.941 33.4257 129.41 33.4034C129.915 33.3156 130.397 33.1251 130.828 32.8435C134.885 30.6028 139.43 29.4163 144.053 29.3906C144.008 29.0369 144.094 28.6787 144.295 28.3856C144.496 28.0925 144.798 27.8853 145.141 27.8041C146.085 27.6175 146.929 28.4374 147.384 29.2906C147.833 30.1438 148.116 31.1304 148.842 31.7703C149.561 32.4102 150.953 32.3769 151.236 31.457C151.513 30.5705 150.596 29.8105 149.838 29.284C149.073 28.764 148.275 27.7975 148.789 27.0243C152.668 26.151 156.579 25.2844 160.557 25.1111C161.233 25.1318 161.906 25.0139 162.535 24.7645C162.847 24.6311 163.107 24.3974 163.274 24.0997C163.441 23.802 163.506 23.457 163.459 23.1181C162.591 23.3228 161.682 23.2623 160.849 22.9442C160.015 22.6261 159.293 22.0648 158.776 21.3316C162.859 20.9917 167.133 20.6917 171.058 21.6183L174.494 24.5646C173.841 25.2511 172.971 25.8977 173.445 26.5843C173.602 26.742 173.792 26.8617 174.001 26.9344C174.21 27.0072 174.433 27.031 174.653 27.0042C175.484 27.0176 176.315 27.0376 177.139 27.0376C194.201 43.5297 204.702 65.7596 206.664 89.5363C205.278 89.483 204.005 91.2561 204.183 92.8025C204.395 94.5956 205.674 96.0354 206.591 97.5819C206.743 97.8333 206.879 98.0938 207 98.3619L206.875 102.761Z" fill="#BBB9B9" />
          <path d="M160.5 64C165.747 64 170 59.7467 170 54.5C170 49.2533 165.747 45 160.5 45C155.253 45 151 49.2533 151 54.5C151 59.7467 155.253 64 160.5 64Z" fill="#3F3D56" />
          <path d="M191 37C198.18 37 204 31.4036 204 24.5C204 17.5964 198.18 12 191 12C183.82 12 178 17.5964 178 24.5C178 31.4036 183.82 37 191 37Z" fill="white" />
          <path d="M203.653 11.0645C200.289 7.76408 195.758 5.94284 191.058 6.00137C186.359 6.0599 181.874 7.99342 178.592 11.3766C171.758 18.4216 162 54 162 54C162 54 197.129 43.3098 203.964 36.2648C207.246 32.8816 209.057 28.326 208.999 23.6C208.94 18.874 207.018 14.3648 203.653 11.0645ZM185.241 30.0432C184.079 28.9026 183.278 27.441 182.942 25.8431C182.605 24.2452 182.747 22.5828 183.35 21.0662C183.953 19.5495 184.99 18.2467 186.329 17.3225C187.668 16.3983 189.25 15.8943 190.874 15.874C192.499 15.8538 194.092 16.3183 195.454 17.2089C196.816 18.0994 197.884 19.376 198.524 20.8772C199.164 22.3783 199.347 24.0367 199.05 25.6425C198.753 27.2483 197.989 28.7294 196.855 29.8986C195.334 31.4664 193.256 32.3624 191.078 32.3895C188.9 32.4166 186.8 31.5726 185.241 30.0432Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="162" y1="6" x2="209.44" y2="6.43907" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4D17C0" />
              <stop offset="1" stop-color="#AB1AC2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="login-navigation__title">Travelling made easy</div>
      <div className="login-navigation__subtitle">
        <Link className="login-navigation__link" to="/login">Login</Link> to access your account
      </div>
    </div >
  );
};

export default LoginNavigation;
