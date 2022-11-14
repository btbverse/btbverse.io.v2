import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Circles = () => {
  const container = {
    hidden: { opacity: 1, scale: 9 },
    visible: {
      opacity: 1,
      scale: 2,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Box>
        <motion.svg
          width="1000"
          height="1000"
          viewBox="0 0 340 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            variants={container}
            initial="hidden"
            animate={{
              scale: [3, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 0,
            }}
          >
            <motion.path
              d="M141.232 142C140.166 142 139.346 141.713 138.772 141.139C138.198 140.565 137.911 139.745 137.911 138.679V116.416C137.911 115.35 138.198 114.53 138.772 113.956C139.346 113.382 140.166 113.095 141.232 113.095H151.154C153.204 113.095 154.953 113.396 156.402 113.997C157.851 114.598 158.944 115.459 159.682 116.58C160.447 117.701 160.83 119.04 160.83 120.598C160.83 122.32 160.338 123.782 159.354 124.985C158.37 126.188 157.017 126.994 155.295 127.404V126.748C157.29 127.103 158.835 127.896 159.928 129.126C161.049 130.329 161.609 131.9 161.609 133.841C161.609 136.41 160.721 138.419 158.944 139.868C157.167 141.289 154.721 142 151.605 142H141.232ZM143.979 137.285H150.744C152.384 137.285 153.587 136.971 154.352 136.342C155.117 135.686 155.5 134.729 155.5 133.472C155.5 132.215 155.117 131.272 154.352 130.643C153.587 130.014 152.384 129.7 150.744 129.7H143.979V137.285ZM143.979 124.985H150.047C151.632 124.985 152.808 124.684 153.573 124.083C154.338 123.482 154.721 122.58 154.721 121.377C154.721 120.202 154.338 119.313 153.573 118.712C152.808 118.111 151.632 117.81 150.047 117.81H143.979V124.985ZM170.979 142.369C169.941 142.369 169.148 142.082 168.601 141.508C168.055 140.934 167.781 140.128 167.781 139.089V118.343H160.524C159.677 118.343 159.021 118.111 158.556 117.646C158.092 117.181 157.859 116.539 157.859 115.719C157.859 114.872 158.092 114.229 158.556 113.792C159.021 113.327 159.677 113.095 160.524 113.095H181.393C182.241 113.095 182.897 113.327 183.361 113.792C183.826 114.229 184.058 114.872 184.058 115.719C184.058 116.539 183.826 117.181 183.361 117.646C182.897 118.111 182.241 118.343 181.393 118.343H174.136V139.089C174.136 140.128 173.863 140.934 173.316 141.508C172.797 142.082 172.018 142.369 170.979 142.369ZM184.995 142C183.929 142 183.109 141.713 182.535 141.139C181.961 140.565 181.674 139.745 181.674 138.679V116.416C181.674 115.35 181.961 114.53 182.535 113.956C183.109 113.382 183.929 113.095 184.995 113.095H194.917C196.967 113.095 198.716 113.396 200.165 113.997C201.613 114.598 202.707 115.459 203.445 116.58C204.21 117.701 204.593 119.04 204.593 120.598C204.593 122.32 204.101 123.782 203.117 124.985C202.133 126.188 200.78 126.994 199.058 127.404V126.748C201.053 127.103 202.597 127.896 203.691 129.126C204.811 130.329 205.372 131.9 205.372 133.841C205.372 136.41 204.483 138.419 202.707 139.868C200.93 141.289 198.484 142 195.368 142H184.995ZM187.742 137.285H194.507C196.147 137.285 197.349 136.971 198.115 136.342C198.88 135.686 199.263 134.729 199.263 133.472C199.263 132.215 198.88 131.272 198.115 130.643C197.349 130.014 196.147 129.7 194.507 129.7H187.742V137.285ZM187.742 124.985H193.81C195.395 124.985 196.57 124.684 197.336 124.083C198.101 123.482 198.484 122.58 198.484 121.377C198.484 120.202 198.101 119.313 197.336 118.712C196.57 118.111 195.395 117.81 193.81 117.81H187.742V124.985Z"
              fill="white"
            />
            <motion.path
              d="M144.367 160.441C144.097 160.441 143.872 160.369 143.692 160.225C143.512 160.081 143.35 159.865 143.206 159.577L138.346 148.237C138.256 148.021 138.22 147.823 138.238 147.643C138.274 147.445 138.355 147.292 138.481 147.184C138.625 147.058 138.823 146.995 139.075 146.995C139.309 146.995 139.48 147.049 139.588 147.157C139.714 147.265 139.822 147.436 139.912 147.67L144.718 159.28H144.043L148.876 147.67C148.966 147.436 149.074 147.265 149.2 147.157C149.326 147.049 149.506 146.995 149.74 146.995C149.974 146.995 150.145 147.058 150.253 147.184C150.379 147.292 150.451 147.436 150.469 147.616C150.487 147.796 150.451 147.994 150.361 148.21L145.501 159.577C145.393 159.865 145.24 160.081 145.042 160.225C144.844 160.369 144.619 160.441 144.367 160.441ZM159.729 160.495C158.379 160.495 157.218 160.225 156.246 159.685C155.274 159.145 154.527 158.371 154.005 157.363C153.483 156.355 153.222 155.158 153.222 153.772C153.222 152.404 153.483 151.216 154.005 150.208C154.527 149.182 155.247 148.381 156.165 147.805C157.101 147.229 158.172 146.941 159.378 146.941C160.26 146.941 161.034 147.094 161.7 147.4C162.384 147.688 162.96 148.111 163.428 148.669C163.914 149.209 164.283 149.875 164.535 150.667C164.787 151.441 164.913 152.323 164.913 153.313C164.913 153.565 164.841 153.754 164.697 153.88C164.571 154.006 164.391 154.069 164.157 154.069H154.41V152.854H163.887L163.455 153.205C163.455 152.161 163.302 151.279 162.996 150.559C162.69 149.821 162.231 149.254 161.619 148.858C161.025 148.462 160.287 148.264 159.405 148.264C158.415 148.264 157.578 148.498 156.894 148.966C156.21 149.416 155.697 150.046 155.355 150.856C155.013 151.648 154.842 152.566 154.842 153.61V153.745C154.842 155.473 155.265 156.805 156.111 157.741C156.957 158.659 158.145 159.118 159.675 159.118C160.341 159.118 160.98 159.028 161.592 158.848C162.222 158.668 162.834 158.362 163.428 157.93C163.608 157.804 163.779 157.741 163.941 157.741C164.121 157.741 164.265 157.786 164.373 157.876C164.499 157.966 164.58 158.083 164.616 158.227C164.67 158.353 164.661 158.497 164.589 158.659C164.535 158.803 164.418 158.938 164.238 159.064C163.662 159.532 162.969 159.892 162.159 160.144C161.349 160.378 160.539 160.495 159.729 160.495ZM169.917 160.441C169.647 160.441 169.44 160.369 169.296 160.225C169.152 160.081 169.08 159.874 169.08 159.604V147.859C169.08 147.571 169.152 147.355 169.296 147.211C169.44 147.067 169.647 146.995 169.917 146.995C170.169 146.995 170.358 147.067 170.484 147.211C170.628 147.355 170.7 147.571 170.7 147.859V150.262H170.43C170.754 149.2 171.33 148.381 172.158 147.805C173.004 147.229 174.012 146.932 175.182 146.914C175.398 146.896 175.578 146.941 175.722 147.049C175.866 147.157 175.938 147.328 175.938 147.562C175.956 147.814 175.902 148.012 175.776 148.156C175.65 148.282 175.443 148.363 175.155 148.399L174.777 148.426C173.499 148.552 172.509 148.975 171.807 149.695C171.105 150.415 170.754 151.387 170.754 152.611V159.604C170.754 159.874 170.682 160.081 170.538 160.225C170.412 160.369 170.205 160.441 169.917 160.441ZM183.253 160.495C182.443 160.495 181.633 160.387 180.823 160.171C180.031 159.955 179.275 159.586 178.555 159.064C178.411 158.974 178.312 158.866 178.258 158.74C178.222 158.596 178.213 158.452 178.231 158.308C178.267 158.164 178.33 158.047 178.42 157.957C178.528 157.849 178.654 157.786 178.798 157.768C178.942 157.75 179.095 157.795 179.257 157.903C179.959 158.371 180.643 158.695 181.309 158.875C181.975 159.055 182.641 159.145 183.307 159.145C184.405 159.145 185.242 158.938 185.818 158.524C186.394 158.11 186.682 157.552 186.682 156.85C186.682 156.274 186.493 155.833 186.115 155.527C185.755 155.203 185.161 154.942 184.333 154.744L181.984 154.204C180.85 153.952 180.013 153.547 179.473 152.989C178.933 152.413 178.663 151.675 178.663 150.775C178.663 150.001 178.861 149.326 179.257 148.75C179.671 148.174 180.247 147.733 180.985 147.427C181.741 147.103 182.605 146.941 183.577 146.941C184.369 146.941 185.125 147.058 185.845 147.292C186.565 147.526 187.195 147.886 187.735 148.372C187.879 148.48 187.969 148.606 188.005 148.75C188.059 148.894 188.059 149.038 188.005 149.182C187.969 149.308 187.897 149.416 187.789 149.506C187.681 149.596 187.555 149.641 187.411 149.641C187.267 149.641 187.114 149.587 186.952 149.479C186.43 149.083 185.881 148.795 185.305 148.615C184.729 148.417 184.144 148.318 183.55 148.318C182.506 148.318 181.696 148.534 181.12 148.966C180.562 149.398 180.283 149.983 180.283 150.721C180.283 151.279 180.454 151.729 180.796 152.071C181.156 152.413 181.714 152.674 182.47 152.854L184.819 153.394C185.989 153.664 186.862 154.069 187.438 154.609C188.014 155.131 188.302 155.842 188.302 156.742C188.302 157.894 187.843 158.812 186.925 159.496C186.025 160.162 184.801 160.495 183.253 160.495ZM198.387 160.495C197.037 160.495 195.876 160.225 194.904 159.685C193.932 159.145 193.185 158.371 192.663 157.363C192.141 156.355 191.88 155.158 191.88 153.772C191.88 152.404 192.141 151.216 192.663 150.208C193.185 149.182 193.905 148.381 194.823 147.805C195.759 147.229 196.83 146.941 198.036 146.941C198.918 146.941 199.692 147.094 200.358 147.4C201.042 147.688 201.618 148.111 202.086 148.669C202.572 149.209 202.941 149.875 203.193 150.667C203.445 151.441 203.571 152.323 203.571 153.313C203.571 153.565 203.499 153.754 203.355 153.88C203.229 154.006 203.049 154.069 202.815 154.069H193.068V152.854H202.545L202.113 153.205C202.113 152.161 201.96 151.279 201.654 150.559C201.348 149.821 200.889 149.254 200.277 148.858C199.683 148.462 198.945 148.264 198.063 148.264C197.073 148.264 196.236 148.498 195.552 148.966C194.868 149.416 194.355 150.046 194.013 150.856C193.671 151.648 193.5 152.566 193.5 153.61V153.745C193.5 155.473 193.923 156.805 194.769 157.741C195.615 158.659 196.803 159.118 198.333 159.118C198.999 159.118 199.638 159.028 200.25 158.848C200.88 158.668 201.492 158.362 202.086 157.93C202.266 157.804 202.437 157.741 202.599 157.741C202.779 157.741 202.923 157.786 203.031 157.876C203.157 157.966 203.238 158.083 203.274 158.227C203.328 158.353 203.319 158.497 203.247 158.659C203.193 158.803 203.076 158.938 202.896 159.064C202.32 159.532 201.627 159.892 200.817 160.144C200.007 160.378 199.197 160.495 198.387 160.495Z"
              fill="white"
            />
            <motion.rect x="145" y="113" width="49" height="3" fill="white" />
          </motion.g>
        </motion.svg>
      </Box>
    </>
  );

  /*
  return (
    <>
      <Box>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 350 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g variants={container} initial="hidden" animate="visible">
            <motion.circle
              cx="50"
              cy="64"
              r="50"
              fill="#6F2DBD"
              fillOpacity="0.5"
              variants={item}
            />
            <motion.path
              d="M8.58466 67V58.252H10.0067V59.728C10.2707 59.2 10.6367 58.798 11.1047 58.522C11.5727 58.234 12.1187 58.09 12.7427 58.09C14.1107 58.09 14.9867 58.684 15.3707 59.872C15.6347 59.32 16.0247 58.888 16.5407 58.576C17.0567 58.252 17.6507 58.09 18.3227 58.09C20.2667 58.09 21.2387 59.242 21.2387 61.546V67H19.7807V61.618C19.7807 60.814 19.6367 60.226 19.3487 59.854C19.0727 59.47 18.6107 59.278 17.9627 59.278C17.2547 59.278 16.6907 59.53 16.2707 60.034C15.8507 60.538 15.6407 61.21 15.6407 62.05V67H14.1827V61.618C14.1827 60.814 14.0387 60.226 13.7507 59.854C13.4747 59.47 13.0127 59.278 12.3647 59.278C11.6447 59.278 11.0747 59.53 10.6547 60.034C10.2467 60.538 10.0427 61.21 10.0427 62.05V67H8.58466ZM27.9067 67.162C26.5267 67.162 25.4347 66.76 24.6307 65.956C23.8267 65.14 23.4247 64.036 23.4247 62.644C23.4247 61.744 23.6047 60.952 23.9647 60.268C24.3247 59.572 24.8167 59.038 25.4407 58.666C26.0767 58.282 26.8087 58.09 27.6367 58.09C28.8247 58.09 29.7547 58.474 30.4267 59.242C31.0987 59.998 31.4347 61.042 31.4347 62.374V62.932H24.8467C24.8947 63.928 25.1827 64.69 25.7107 65.218C26.2387 65.734 26.9707 65.992 27.9067 65.992C28.4347 65.992 28.9387 65.914 29.4187 65.758C29.8987 65.59 30.3547 65.32 30.7867 64.948L31.2907 65.974C30.8947 66.346 30.3907 66.64 29.7787 66.856C29.1667 67.06 28.5427 67.162 27.9067 67.162ZM27.6727 59.17C26.8447 59.17 26.1907 59.428 25.7107 59.944C25.2307 60.46 24.9487 61.138 24.8647 61.978H30.1747C30.1387 61.09 29.9047 60.4 29.4727 59.908C29.0527 59.416 28.4527 59.17 27.6727 59.17ZM33.5448 67V58.252H34.9668V59.818C35.4348 58.762 36.3948 58.18 37.8468 58.072L38.3688 58.018L38.4768 59.278L37.5588 59.386C36.7308 59.458 36.1008 59.722 35.6688 60.178C35.2368 60.622 35.0208 61.234 35.0208 62.014V67H33.5448ZM43.5985 67.162C42.7225 67.162 41.9665 66.976 41.3305 66.604C40.6945 66.22 40.2025 65.686 39.8545 65.002C39.5185 64.306 39.3505 63.496 39.3505 62.572C39.3505 61.18 39.7285 60.088 40.4845 59.296C41.2405 58.492 42.2785 58.09 43.5985 58.09C44.1385 58.09 44.6725 58.186 45.2005 58.378C45.7285 58.57 46.1665 58.84 46.5145 59.188L46.0105 60.25C45.6625 59.914 45.2785 59.668 44.8585 59.512C44.4505 59.356 44.0605 59.278 43.6885 59.278C42.7765 59.278 42.0745 59.566 41.5825 60.142C41.0905 60.706 40.8445 61.522 40.8445 62.59C40.8445 63.634 41.0905 64.462 41.5825 65.074C42.0745 65.674 42.7765 65.974 43.6885 65.974C44.0605 65.974 44.4505 65.896 44.8585 65.74C45.2785 65.584 45.6625 65.332 46.0105 64.984L46.5145 66.046C46.1665 66.394 45.7225 66.67 45.1825 66.874C44.6545 67.066 44.1265 67.162 43.5985 67.162ZM48.2225 67V54.31H49.6805V59.692C49.9685 59.164 50.3705 58.768 50.8865 58.504C51.4145 58.228 52.0025 58.09 52.6505 58.09C54.7265 58.09 55.7645 59.242 55.7645 61.546V67H54.3065V61.636C54.3065 60.82 54.1445 60.226 53.8205 59.854C53.5085 59.47 53.0045 59.278 52.3085 59.278C51.5045 59.278 50.8625 59.53 50.3825 60.034C49.9145 60.526 49.6805 61.186 49.6805 62.014V67H48.2225ZM61.207 67.162C60.607 67.162 60.067 67.048 59.587 66.82C59.119 66.58 58.747 66.256 58.471 65.848C58.195 65.44 58.057 64.984 58.057 64.48C58.057 63.844 58.219 63.34 58.543 62.968C58.879 62.596 59.425 62.332 60.181 62.176C60.949 62.008 61.993 61.924 63.313 61.924H63.889V61.366C63.889 60.622 63.733 60.088 63.421 59.764C63.121 59.428 62.635 59.26 61.963 59.26C61.435 59.26 60.925 59.338 60.433 59.494C59.941 59.638 59.437 59.878 58.921 60.214L58.417 59.152C58.873 58.828 59.425 58.57 60.073 58.378C60.733 58.186 61.363 58.09 61.963 58.09C63.091 58.09 63.925 58.366 64.465 58.918C65.017 59.47 65.293 60.328 65.293 61.492V67H63.925V65.488C63.697 66.004 63.343 66.412 62.863 66.712C62.395 67.012 61.843 67.162 61.207 67.162ZM61.441 66.064C62.161 66.064 62.749 65.818 63.205 65.326C63.661 64.822 63.889 64.186 63.889 63.418V62.878H63.331C62.359 62.878 61.591 62.926 61.027 63.022C60.475 63.106 60.085 63.262 59.857 63.49C59.641 63.706 59.533 64.006 59.533 64.39C59.533 64.882 59.701 65.284 60.037 65.596C60.385 65.908 60.853 66.064 61.441 66.064ZM67.9979 67V58.252H69.4199V59.746C69.7079 59.194 70.1159 58.78 70.6439 58.504C71.1719 58.228 71.7659 58.09 72.4259 58.09C74.5019 58.09 75.5399 59.242 75.5399 61.546V67H74.0819V61.636C74.0819 60.82 73.9199 60.226 73.5959 59.854C73.2839 59.47 72.7799 59.278 72.0839 59.278C71.2799 59.278 70.6379 59.53 70.1579 60.034C69.6899 60.526 69.4559 61.186 69.4559 62.014V67H67.9979ZM81.7384 67.162C80.7064 67.162 79.9324 66.892 79.4164 66.352C78.9004 65.8 78.6424 65.008 78.6424 63.976V59.386H76.9324V58.252H78.6424V55.57H80.1004V58.252H82.8724V59.386H80.1004V63.832C80.1004 64.516 80.2444 65.038 80.5324 65.398C80.8204 65.746 81.2884 65.92 81.9364 65.92C82.1284 65.92 82.3204 65.896 82.5124 65.848C82.7044 65.8 82.8784 65.752 83.0344 65.704L83.2864 66.82C83.1304 66.904 82.9024 66.982 82.6024 67.054C82.3024 67.126 82.0144 67.162 81.7384 67.162ZM87.4733 67.162C86.7893 67.162 86.1413 67.066 85.5293 66.874C84.9173 66.682 84.4133 66.412 84.0173 66.064L84.4853 65.038C84.9173 65.386 85.3913 65.644 85.9073 65.812C86.4353 65.968 86.9693 66.046 87.5093 66.046C88.1933 66.046 88.7093 65.92 89.0573 65.668C89.4053 65.416 89.5793 65.074 89.5793 64.642C89.5793 64.306 89.4653 64.042 89.2373 63.85C89.0093 63.646 88.6493 63.49 88.1573 63.382L86.5193 63.022C85.0313 62.698 84.2873 61.93 84.2873 60.718C84.2873 59.926 84.5993 59.29 85.2233 58.81C85.8593 58.33 86.6873 58.09 87.7073 58.09C88.3073 58.09 88.8773 58.186 89.4173 58.378C89.9693 58.558 90.4253 58.828 90.7853 59.188L90.2993 60.214C89.9513 59.89 89.5433 59.644 89.0753 59.476C88.6193 59.296 88.1633 59.206 87.7073 59.206C87.0353 59.206 86.5253 59.338 86.1773 59.602C85.8293 59.866 85.6553 60.214 85.6553 60.646C85.6553 61.318 86.0993 61.75 86.9873 61.942L88.6253 62.284C89.3933 62.452 89.9753 62.722 90.3713 63.094C90.7673 63.454 90.9653 63.946 90.9653 64.57C90.9653 65.374 90.6473 66.01 90.0113 66.478C89.3753 66.934 88.5293 67.162 87.4733 67.162Z"
              fill="white"
              fillOpacity="0.6"
              variants={item}
            />
            <motion.circle
              cx="282"
              cy="61"
              r="61"
              fill="#A663CC"
              fillOpacity="0.5"
              variants={item}
            />
            <motion.path
              d="M253.946 67.522C253.07 67.522 252.314 67.336 251.678 66.964C251.042 66.58 250.55 66.046 250.202 65.362C249.866 64.666 249.698 63.856 249.698 62.932C249.698 61.54 250.076 60.448 250.832 59.656C251.588 58.852 252.626 58.45 253.946 58.45C254.486 58.45 255.02 58.546 255.548 58.738C256.076 58.93 256.514 59.2 256.862 59.548L256.358 60.61C256.01 60.274 255.626 60.028 255.206 59.872C254.798 59.716 254.408 59.638 254.036 59.638C253.124 59.638 252.422 59.926 251.93 60.502C251.438 61.066 251.192 61.882 251.192 62.95C251.192 63.994 251.438 64.822 251.93 65.434C252.422 66.034 253.124 66.334 254.036 66.334C254.408 66.334 254.798 66.256 255.206 66.1C255.626 65.944 256.01 65.692 256.358 65.344L256.862 66.406C256.514 66.754 256.07 67.03 255.53 67.234C255.002 67.426 254.474 67.522 253.946 67.522ZM258.57 67.36V58.612H259.992V60.178C260.46 59.122 261.42 58.54 262.872 58.432L263.394 58.378L263.502 59.638L262.584 59.746C261.756 59.818 261.126 60.082 260.694 60.538C260.262 60.982 260.046 61.594 260.046 62.374V67.36H258.57ZM268.858 67.522C267.478 67.522 266.386 67.12 265.582 66.316C264.778 65.5 264.376 64.396 264.376 63.004C264.376 62.104 264.556 61.312 264.916 60.628C265.276 59.932 265.768 59.398 266.392 59.026C267.028 58.642 267.76 58.45 268.588 58.45C269.776 58.45 270.706 58.834 271.378 59.602C272.05 60.358 272.386 61.402 272.386 62.734V63.292H265.798C265.846 64.288 266.134 65.05 266.662 65.578C267.19 66.094 267.922 66.352 268.858 66.352C269.386 66.352 269.89 66.274 270.37 66.118C270.85 65.95 271.306 65.68 271.738 65.308L272.242 66.334C271.846 66.706 271.342 67 270.73 67.216C270.118 67.42 269.494 67.522 268.858 67.522ZM268.624 59.53C267.796 59.53 267.142 59.788 266.662 60.304C266.182 60.82 265.9 61.498 265.816 62.338H271.126C271.09 61.45 270.856 60.76 270.424 60.268C270.004 59.776 269.404 59.53 268.624 59.53ZM277.25 67.522C276.65 67.522 276.11 67.408 275.63 67.18C275.162 66.94 274.79 66.616 274.514 66.208C274.238 65.8 274.1 65.344 274.1 64.84C274.1 64.204 274.262 63.7 274.586 63.328C274.922 62.956 275.468 62.692 276.224 62.536C276.992 62.368 278.036 62.284 279.356 62.284H279.932V61.726C279.932 60.982 279.776 60.448 279.464 60.124C279.164 59.788 278.678 59.62 278.006 59.62C277.478 59.62 276.968 59.698 276.476 59.854C275.984 59.998 275.48 60.238 274.964 60.574L274.46 59.512C274.916 59.188 275.468 58.93 276.116 58.738C276.776 58.546 277.406 58.45 278.006 58.45C279.134 58.45 279.968 58.726 280.508 59.278C281.06 59.83 281.336 60.688 281.336 61.852V67.36H279.968V65.848C279.74 66.364 279.386 66.772 278.906 67.072C278.438 67.372 277.886 67.522 277.25 67.522ZM277.484 66.424C278.204 66.424 278.792 66.178 279.248 65.686C279.704 65.182 279.932 64.546 279.932 63.778V63.238H279.374C278.402 63.238 277.634 63.286 277.07 63.382C276.518 63.466 276.128 63.622 275.9 63.85C275.684 64.066 275.576 64.366 275.576 64.75C275.576 65.242 275.744 65.644 276.08 65.956C276.428 66.268 276.896 66.424 277.484 66.424ZM287.551 67.522C286.519 67.522 285.745 67.252 285.229 66.712C284.713 66.16 284.455 65.368 284.455 64.336V59.746H282.745V58.612H284.455V55.93H285.913V58.612H288.685V59.746H285.913V64.192C285.913 64.876 286.057 65.398 286.345 65.758C286.633 66.106 287.101 66.28 287.749 66.28C287.941 66.28 288.133 66.256 288.325 66.208C288.517 66.16 288.691 66.112 288.847 66.064L289.099 67.18C288.943 67.264 288.715 67.342 288.415 67.414C288.115 67.486 287.827 67.522 287.551 67.522ZM293.882 67.522C293.03 67.522 292.292 67.336 291.668 66.964C291.044 66.592 290.558 66.07 290.21 65.398C289.874 64.714 289.706 63.91 289.706 62.986C289.706 62.062 289.874 61.264 290.21 60.592C290.558 59.908 291.044 59.38 291.668 59.008C292.292 58.636 293.03 58.45 293.882 58.45C294.722 58.45 295.454 58.636 296.078 59.008C296.714 59.38 297.2 59.908 297.536 60.592C297.884 61.264 298.058 62.062 298.058 62.986C298.058 63.91 297.884 64.714 297.536 65.398C297.2 66.07 296.714 66.592 296.078 66.964C295.454 67.336 294.722 67.522 293.882 67.522ZM293.882 66.352C294.698 66.352 295.352 66.064 295.844 65.488C296.336 64.9 296.582 64.066 296.582 62.986C296.582 61.894 296.336 61.06 295.844 60.484C295.352 59.908 294.698 59.62 293.882 59.62C293.054 59.62 292.394 59.908 291.902 60.484C291.422 61.06 291.182 61.894 291.182 62.986C291.182 64.066 291.422 64.9 291.902 65.488C292.394 66.064 293.054 66.352 293.882 66.352ZM300.248 67.36V58.612H301.67V60.178C302.138 59.122 303.098 58.54 304.55 58.432L305.072 58.378L305.18 59.638L304.262 59.746C303.434 59.818 302.804 60.082 302.372 60.538C301.94 60.982 301.724 61.594 301.724 62.374V67.36H300.248ZM309.563 67.522C308.879 67.522 308.231 67.426 307.619 67.234C307.007 67.042 306.503 66.772 306.107 66.424L306.575 65.398C307.007 65.746 307.481 66.004 307.997 66.172C308.525 66.328 309.059 66.406 309.599 66.406C310.283 66.406 310.799 66.28 311.147 66.028C311.495 65.776 311.669 65.434 311.669 65.002C311.669 64.666 311.555 64.402 311.327 64.21C311.099 64.006 310.739 63.85 310.247 63.742L308.609 63.382C307.121 63.058 306.377 62.29 306.377 61.078C306.377 60.286 306.689 59.65 307.313 59.17C307.949 58.69 308.777 58.45 309.797 58.45C310.397 58.45 310.967 58.546 311.507 58.738C312.059 58.918 312.515 59.188 312.875 59.548L312.389 60.574C312.041 60.25 311.633 60.004 311.165 59.836C310.709 59.656 310.253 59.566 309.797 59.566C309.125 59.566 308.615 59.698 308.267 59.962C307.919 60.226 307.745 60.574 307.745 61.006C307.745 61.678 308.189 62.11 309.077 62.302L310.715 62.644C311.483 62.812 312.065 63.082 312.461 63.454C312.857 63.814 313.055 64.306 313.055 64.93C313.055 65.734 312.737 66.37 312.101 66.838C311.465 67.294 310.619 67.522 309.563 67.522Z"
              fill="white"
              fillOpacity="0.6"
              variants={item}
            />
            <motion.circle
              variants={item}
              cx="191"
              cy="275"
              r="45"
              fill="#B9FAF8"
            />
            <motion.path
              d="M173.331 281.362C171.231 281.362 170.181 280.204 170.181 277.888V272.452H171.639V277.87C171.639 278.65 171.795 279.226 172.107 279.598C172.431 279.97 172.935 280.156 173.619 280.156C174.363 280.156 174.969 279.91 175.437 279.418C175.905 278.914 176.139 278.248 176.139 277.42V272.452H177.597V281.2H176.175V279.724C175.899 280.252 175.509 280.66 175.005 280.948C174.513 281.224 173.955 281.362 173.331 281.362ZM183.277 281.362C182.593 281.362 181.945 281.266 181.333 281.074C180.721 280.882 180.217 280.612 179.821 280.264L180.289 279.238C180.721 279.586 181.195 279.844 181.711 280.012C182.239 280.168 182.773 280.246 183.313 280.246C183.997 280.246 184.513 280.12 184.861 279.868C185.209 279.616 185.383 279.274 185.383 278.842C185.383 278.506 185.269 278.242 185.041 278.05C184.813 277.846 184.453 277.69 183.961 277.582L182.323 277.222C180.835 276.898 180.091 276.13 180.091 274.918C180.091 274.126 180.403 273.49 181.027 273.01C181.663 272.53 182.491 272.29 183.511 272.29C184.111 272.29 184.681 272.386 185.221 272.578C185.773 272.758 186.229 273.028 186.589 273.388L186.103 274.414C185.755 274.09 185.347 273.844 184.879 273.676C184.423 273.496 183.967 273.406 183.511 273.406C182.839 273.406 182.329 273.538 181.981 273.802C181.633 274.066 181.459 274.414 181.459 274.846C181.459 275.518 181.903 275.95 182.791 276.142L184.429 276.484C185.197 276.652 185.779 276.922 186.175 277.294C186.571 277.654 186.769 278.146 186.769 278.77C186.769 279.574 186.451 280.21 185.815 280.678C185.179 281.134 184.333 281.362 183.277 281.362ZM192.933 281.362C191.553 281.362 190.461 280.96 189.657 280.156C188.853 279.34 188.451 278.236 188.451 276.844C188.451 275.944 188.631 275.152 188.991 274.468C189.351 273.772 189.843 273.238 190.467 272.866C191.103 272.482 191.835 272.29 192.663 272.29C193.851 272.29 194.781 272.674 195.453 273.442C196.125 274.198 196.461 275.242 196.461 276.574V277.132H189.873C189.921 278.128 190.209 278.89 190.737 279.418C191.265 279.934 191.997 280.192 192.933 280.192C193.461 280.192 193.965 280.114 194.445 279.958C194.925 279.79 195.381 279.52 195.813 279.148L196.317 280.174C195.921 280.546 195.417 280.84 194.805 281.056C194.193 281.26 193.569 281.362 192.933 281.362ZM192.699 273.37C191.871 273.37 191.217 273.628 190.737 274.144C190.257 274.66 189.975 275.338 189.891 276.178H195.201C195.165 275.29 194.931 274.6 194.499 274.108C194.079 273.616 193.479 273.37 192.699 273.37ZM198.571 281.2V272.452H199.993V274.018C200.461 272.962 201.421 272.38 202.873 272.272L203.395 272.218L203.503 273.478L202.585 273.586C201.757 273.658 201.127 273.922 200.695 274.378C200.263 274.822 200.047 275.434 200.047 276.214V281.2H198.571ZM207.887 281.362C207.203 281.362 206.555 281.266 205.943 281.074C205.331 280.882 204.827 280.612 204.431 280.264L204.899 279.238C205.331 279.586 205.805 279.844 206.321 280.012C206.849 280.168 207.383 280.246 207.923 280.246C208.607 280.246 209.123 280.12 209.471 279.868C209.819 279.616 209.993 279.274 209.993 278.842C209.993 278.506 209.879 278.242 209.651 278.05C209.423 277.846 209.063 277.69 208.571 277.582L206.933 277.222C205.445 276.898 204.701 276.13 204.701 274.918C204.701 274.126 205.013 273.49 205.637 273.01C206.273 272.53 207.101 272.29 208.121 272.29C208.721 272.29 209.291 272.386 209.831 272.578C210.383 272.758 210.839 273.028 211.199 273.388L210.713 274.414C210.365 274.09 209.957 273.844 209.489 273.676C209.033 273.496 208.577 273.406 208.121 273.406C207.449 273.406 206.939 273.538 206.591 273.802C206.243 274.066 206.069 274.414 206.069 274.846C206.069 275.518 206.513 275.95 207.401 276.142L209.039 276.484C209.807 276.652 210.389 276.922 210.785 277.294C211.181 277.654 211.379 278.146 211.379 278.77C211.379 279.574 211.061 280.21 210.425 280.678C209.789 281.134 208.943 281.362 207.887 281.362Z"
              fill="black"
              variants={item}
            />
          </motion.g>

          <motion.g variants={container} initial="hidden" animate="visible">
            <motion.line
              x1="57.7405"
              y1="100.498"
              x2="160.74"
              y2="254.498"
              stroke="url(#paint0_linear_494_4)"
              strokeWidth="9"
              variants={item}
            />
            <motion.line
              x1="92"
              y1="53"
              x2="235"
              y2="53"
              stroke="url(#paint1_linear_494_4)"
              strokeWidth="16"
              variants={item}
              animate={{
                scale: [1, 2, 2, 1, 1],
              }}
            />
            <motion.line
              x1="259.263"
              y1="115.062"
              x2="198.263"
              y2="245.062"
              stroke="url(#paint2_linear_494_4)"
              strokeWidth="5"
              variants={item}
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_494_4"
                x1="160.041"
                y1="253.905"
                x2="57.8534"
                y2="100.423"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B9FAF8" />
                <stop offset="1" stopColor="#46256D" />
              </motion.linearGradient>
              <motion.linearGradient
                id="paint1_linear_494_4"
                x1="234.319"
                y1="56.7516"
                x2="92"
                y2="56.5209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#614074" />
                <stop offset="1" stopColor="#46256D" />
              </motion.linearGradient>
              <motion.linearGradient
                id="paint2_linear_494_4"
                x1="200.137"
                y1="245.186"
                x2="261.057"
                y2="115.904"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B9FAF8" />
                <stop offset="1" stopColor="#614074" />
              </motion.linearGradient>
            </defs>
          </motion.g>
          <motion.g
            variants={container}
            initial="hidden"
            animate={{
              scale: [3, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 0,
            }}
          >
            <motion.path
              d="M141.232 142C140.166 142 139.346 141.713 138.772 141.139C138.198 140.565 137.911 139.745 137.911 138.679V116.416C137.911 115.35 138.198 114.53 138.772 113.956C139.346 113.382 140.166 113.095 141.232 113.095H151.154C153.204 113.095 154.953 113.396 156.402 113.997C157.851 114.598 158.944 115.459 159.682 116.58C160.447 117.701 160.83 119.04 160.83 120.598C160.83 122.32 160.338 123.782 159.354 124.985C158.37 126.188 157.017 126.994 155.295 127.404V126.748C157.29 127.103 158.835 127.896 159.928 129.126C161.049 130.329 161.609 131.9 161.609 133.841C161.609 136.41 160.721 138.419 158.944 139.868C157.167 141.289 154.721 142 151.605 142H141.232ZM143.979 137.285H150.744C152.384 137.285 153.587 136.971 154.352 136.342C155.117 135.686 155.5 134.729 155.5 133.472C155.5 132.215 155.117 131.272 154.352 130.643C153.587 130.014 152.384 129.7 150.744 129.7H143.979V137.285ZM143.979 124.985H150.047C151.632 124.985 152.808 124.684 153.573 124.083C154.338 123.482 154.721 122.58 154.721 121.377C154.721 120.202 154.338 119.313 153.573 118.712C152.808 118.111 151.632 117.81 150.047 117.81H143.979V124.985ZM170.979 142.369C169.941 142.369 169.148 142.082 168.601 141.508C168.055 140.934 167.781 140.128 167.781 139.089V118.343H160.524C159.677 118.343 159.021 118.111 158.556 117.646C158.092 117.181 157.859 116.539 157.859 115.719C157.859 114.872 158.092 114.229 158.556 113.792C159.021 113.327 159.677 113.095 160.524 113.095H181.393C182.241 113.095 182.897 113.327 183.361 113.792C183.826 114.229 184.058 114.872 184.058 115.719C184.058 116.539 183.826 117.181 183.361 117.646C182.897 118.111 182.241 118.343 181.393 118.343H174.136V139.089C174.136 140.128 173.863 140.934 173.316 141.508C172.797 142.082 172.018 142.369 170.979 142.369ZM184.995 142C183.929 142 183.109 141.713 182.535 141.139C181.961 140.565 181.674 139.745 181.674 138.679V116.416C181.674 115.35 181.961 114.53 182.535 113.956C183.109 113.382 183.929 113.095 184.995 113.095H194.917C196.967 113.095 198.716 113.396 200.165 113.997C201.613 114.598 202.707 115.459 203.445 116.58C204.21 117.701 204.593 119.04 204.593 120.598C204.593 122.32 204.101 123.782 203.117 124.985C202.133 126.188 200.78 126.994 199.058 127.404V126.748C201.053 127.103 202.597 127.896 203.691 129.126C204.811 130.329 205.372 131.9 205.372 133.841C205.372 136.41 204.483 138.419 202.707 139.868C200.93 141.289 198.484 142 195.368 142H184.995ZM187.742 137.285H194.507C196.147 137.285 197.349 136.971 198.115 136.342C198.88 135.686 199.263 134.729 199.263 133.472C199.263 132.215 198.88 131.272 198.115 130.643C197.349 130.014 196.147 129.7 194.507 129.7H187.742V137.285ZM187.742 124.985H193.81C195.395 124.985 196.57 124.684 197.336 124.083C198.101 123.482 198.484 122.58 198.484 121.377C198.484 120.202 198.101 119.313 197.336 118.712C196.57 118.111 195.395 117.81 193.81 117.81H187.742V124.985Z"
              fill="white"
            />
            <motion.path
              d="M144.367 160.441C144.097 160.441 143.872 160.369 143.692 160.225C143.512 160.081 143.35 159.865 143.206 159.577L138.346 148.237C138.256 148.021 138.22 147.823 138.238 147.643C138.274 147.445 138.355 147.292 138.481 147.184C138.625 147.058 138.823 146.995 139.075 146.995C139.309 146.995 139.48 147.049 139.588 147.157C139.714 147.265 139.822 147.436 139.912 147.67L144.718 159.28H144.043L148.876 147.67C148.966 147.436 149.074 147.265 149.2 147.157C149.326 147.049 149.506 146.995 149.74 146.995C149.974 146.995 150.145 147.058 150.253 147.184C150.379 147.292 150.451 147.436 150.469 147.616C150.487 147.796 150.451 147.994 150.361 148.21L145.501 159.577C145.393 159.865 145.24 160.081 145.042 160.225C144.844 160.369 144.619 160.441 144.367 160.441ZM159.729 160.495C158.379 160.495 157.218 160.225 156.246 159.685C155.274 159.145 154.527 158.371 154.005 157.363C153.483 156.355 153.222 155.158 153.222 153.772C153.222 152.404 153.483 151.216 154.005 150.208C154.527 149.182 155.247 148.381 156.165 147.805C157.101 147.229 158.172 146.941 159.378 146.941C160.26 146.941 161.034 147.094 161.7 147.4C162.384 147.688 162.96 148.111 163.428 148.669C163.914 149.209 164.283 149.875 164.535 150.667C164.787 151.441 164.913 152.323 164.913 153.313C164.913 153.565 164.841 153.754 164.697 153.88C164.571 154.006 164.391 154.069 164.157 154.069H154.41V152.854H163.887L163.455 153.205C163.455 152.161 163.302 151.279 162.996 150.559C162.69 149.821 162.231 149.254 161.619 148.858C161.025 148.462 160.287 148.264 159.405 148.264C158.415 148.264 157.578 148.498 156.894 148.966C156.21 149.416 155.697 150.046 155.355 150.856C155.013 151.648 154.842 152.566 154.842 153.61V153.745C154.842 155.473 155.265 156.805 156.111 157.741C156.957 158.659 158.145 159.118 159.675 159.118C160.341 159.118 160.98 159.028 161.592 158.848C162.222 158.668 162.834 158.362 163.428 157.93C163.608 157.804 163.779 157.741 163.941 157.741C164.121 157.741 164.265 157.786 164.373 157.876C164.499 157.966 164.58 158.083 164.616 158.227C164.67 158.353 164.661 158.497 164.589 158.659C164.535 158.803 164.418 158.938 164.238 159.064C163.662 159.532 162.969 159.892 162.159 160.144C161.349 160.378 160.539 160.495 159.729 160.495ZM169.917 160.441C169.647 160.441 169.44 160.369 169.296 160.225C169.152 160.081 169.08 159.874 169.08 159.604V147.859C169.08 147.571 169.152 147.355 169.296 147.211C169.44 147.067 169.647 146.995 169.917 146.995C170.169 146.995 170.358 147.067 170.484 147.211C170.628 147.355 170.7 147.571 170.7 147.859V150.262H170.43C170.754 149.2 171.33 148.381 172.158 147.805C173.004 147.229 174.012 146.932 175.182 146.914C175.398 146.896 175.578 146.941 175.722 147.049C175.866 147.157 175.938 147.328 175.938 147.562C175.956 147.814 175.902 148.012 175.776 148.156C175.65 148.282 175.443 148.363 175.155 148.399L174.777 148.426C173.499 148.552 172.509 148.975 171.807 149.695C171.105 150.415 170.754 151.387 170.754 152.611V159.604C170.754 159.874 170.682 160.081 170.538 160.225C170.412 160.369 170.205 160.441 169.917 160.441ZM183.253 160.495C182.443 160.495 181.633 160.387 180.823 160.171C180.031 159.955 179.275 159.586 178.555 159.064C178.411 158.974 178.312 158.866 178.258 158.74C178.222 158.596 178.213 158.452 178.231 158.308C178.267 158.164 178.33 158.047 178.42 157.957C178.528 157.849 178.654 157.786 178.798 157.768C178.942 157.75 179.095 157.795 179.257 157.903C179.959 158.371 180.643 158.695 181.309 158.875C181.975 159.055 182.641 159.145 183.307 159.145C184.405 159.145 185.242 158.938 185.818 158.524C186.394 158.11 186.682 157.552 186.682 156.85C186.682 156.274 186.493 155.833 186.115 155.527C185.755 155.203 185.161 154.942 184.333 154.744L181.984 154.204C180.85 153.952 180.013 153.547 179.473 152.989C178.933 152.413 178.663 151.675 178.663 150.775C178.663 150.001 178.861 149.326 179.257 148.75C179.671 148.174 180.247 147.733 180.985 147.427C181.741 147.103 182.605 146.941 183.577 146.941C184.369 146.941 185.125 147.058 185.845 147.292C186.565 147.526 187.195 147.886 187.735 148.372C187.879 148.48 187.969 148.606 188.005 148.75C188.059 148.894 188.059 149.038 188.005 149.182C187.969 149.308 187.897 149.416 187.789 149.506C187.681 149.596 187.555 149.641 187.411 149.641C187.267 149.641 187.114 149.587 186.952 149.479C186.43 149.083 185.881 148.795 185.305 148.615C184.729 148.417 184.144 148.318 183.55 148.318C182.506 148.318 181.696 148.534 181.12 148.966C180.562 149.398 180.283 149.983 180.283 150.721C180.283 151.279 180.454 151.729 180.796 152.071C181.156 152.413 181.714 152.674 182.47 152.854L184.819 153.394C185.989 153.664 186.862 154.069 187.438 154.609C188.014 155.131 188.302 155.842 188.302 156.742C188.302 157.894 187.843 158.812 186.925 159.496C186.025 160.162 184.801 160.495 183.253 160.495ZM198.387 160.495C197.037 160.495 195.876 160.225 194.904 159.685C193.932 159.145 193.185 158.371 192.663 157.363C192.141 156.355 191.88 155.158 191.88 153.772C191.88 152.404 192.141 151.216 192.663 150.208C193.185 149.182 193.905 148.381 194.823 147.805C195.759 147.229 196.83 146.941 198.036 146.941C198.918 146.941 199.692 147.094 200.358 147.4C201.042 147.688 201.618 148.111 202.086 148.669C202.572 149.209 202.941 149.875 203.193 150.667C203.445 151.441 203.571 152.323 203.571 153.313C203.571 153.565 203.499 153.754 203.355 153.88C203.229 154.006 203.049 154.069 202.815 154.069H193.068V152.854H202.545L202.113 153.205C202.113 152.161 201.96 151.279 201.654 150.559C201.348 149.821 200.889 149.254 200.277 148.858C199.683 148.462 198.945 148.264 198.063 148.264C197.073 148.264 196.236 148.498 195.552 148.966C194.868 149.416 194.355 150.046 194.013 150.856C193.671 151.648 193.5 152.566 193.5 153.61V153.745C193.5 155.473 193.923 156.805 194.769 157.741C195.615 158.659 196.803 159.118 198.333 159.118C198.999 159.118 199.638 159.028 200.25 158.848C200.88 158.668 201.492 158.362 202.086 157.93C202.266 157.804 202.437 157.741 202.599 157.741C202.779 157.741 202.923 157.786 203.031 157.876C203.157 157.966 203.238 158.083 203.274 158.227C203.328 158.353 203.319 158.497 203.247 158.659C203.193 158.803 203.076 158.938 202.896 159.064C202.32 159.532 201.627 159.892 200.817 160.144C200.007 160.378 199.197 160.495 198.387 160.495Z"
              fill="white"
            />
            <motion.rect x="145" y="113" width="49" height="3" fill="white" />
          </motion.g>
        </motion.svg>
      </Box>
    </>
  );
  */
};
