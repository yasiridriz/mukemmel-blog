import Link from './activelink';
import Router from 'next/router';
import { motion } from 'framer-motion';

const logoVariants = {
  initial: { scale: 1, y: 0, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2 } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Header = () => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Yasir Idriz</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" media="screen" href="/static/stylesheets/importer.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
    </head>
    <div onClick={() => Router.push('/')} className="logo">
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate" }} viewBox="573.601 737.976 352.19 225.983"><g><motion.path initial="initial" animate="enter" exit="exit" variants={logoVariants} d=" M 642.906 957.481 L 642.906 868.381 L 662.596 868.381 L 662.596 957.481 L 642.906 957.481 L 642.906 957.481 Z  M 670.906 957.481 L 670.906 868.381 L 693.456 868.381 L 693.456 868.381 Q 705.006 868.381 711.496 871.241 L 711.496 871.241 L 711.496 871.241 Q 717.986 874.101 720.681 880.206 L 720.681 880.206 L 720.681 880.206 Q 723.376 886.311 723.376 896.541 L 723.376 896.541 L 723.376 928.881 L 723.376 928.881 Q 723.376 939.221 720.681 945.381 L 720.681 945.381 L 720.681 945.381 Q 717.986 951.541 711.551 954.511 L 711.551 954.511 L 711.551 954.511 Q 705.116 957.481 693.676 957.481 L 693.676 957.481 L 670.906 957.481 L 670.906 957.481 Z  M 690.596 943.841 L 693.676 943.841 L 693.676 943.841 Q 697.966 943.841 700.001 942.576 L 700.001 942.576 L 700.001 942.576 Q 702.036 941.311 702.586 938.946 L 702.586 938.946 L 702.586 938.946 Q 703.136 936.581 703.136 931.961 L 703.136 931.961 L 703.136 893.131 L 703.136 893.131 Q 703.136 888.841 702.531 886.586 L 702.531 886.586 L 702.531 886.586 Q 701.926 884.331 699.891 883.231 L 699.891 883.231 L 699.891 883.231 Q 697.856 882.131 693.566 882.131 L 693.566 882.131 L 690.596 882.131 L 690.596 943.841 L 690.596 943.841 Z  M 730.366 957.481 L 730.366 868.381 L 754.896 868.381 L 754.896 868.381 Q 769.526 868.381 777.006 873.551 L 777.006 873.551 L 777.006 873.551 Q 784.486 878.721 784.486 891.921 L 784.486 891.921 L 784.486 891.921 Q 784.486 900.831 782.176 906.111 L 782.176 906.111 L 782.176 906.111 Q 779.866 911.391 773.596 914.361 L 773.596 914.361 L 785.806 957.481 L 765.456 957.481 L 755.666 917.551 L 750.056 917.551 L 750.056 957.481 L 730.366 957.481 L 730.366 957.481 Z  M 750.056 906.221 L 755.556 906.221 L 755.556 906.221 Q 761.496 906.221 763.861 903.086 L 763.861 903.086 L 763.861 903.086 Q 766.226 899.951 766.226 893.681 L 766.226 893.681 L 766.226 893.681 Q 766.226 887.631 764.026 884.606 L 764.026 884.606 L 764.026 884.606 Q 761.826 881.581 756.436 881.581 L 756.436 881.581 L 750.056 881.581 L 750.056 906.221 L 750.056 906.221 Z  M 791.476 957.481 L 791.476 868.381 L 811.166 868.381 L 811.166 957.481 L 791.476 957.481 L 791.476 957.481 Z  M 816.066 957.481 L 816.066 945.601 L 837.846 881.691 L 817.056 881.691 L 817.056 868.381 L 857.206 868.381 L 857.206 879.491 L 835.096 944.171 L 857.426 944.171 L 857.426 957.481 L 816.066 957.481 L 816.066 957.481 Z " fill="rgb(0,0,0)" /></g><motion.path initial="initial" animate="enter" exit="exit" variants={logoVariants} d=" M 644.841 738.461 L 644.841 738.461 Q 650.821 738.461 654.721 737.976 L 654.721 737.976 L 654.721 741.209 L 654.721 741.209 Q 648.741 744.281 642.241 759.962 L 642.241 759.962 L 626.901 797.79 L 626.901 835.457 L 626.901 835.457 Q 626.901 841.6 627.616 844.348 L 627.616 844.348 L 627.616 844.348 Q 628.331 847.097 630.281 848.067 L 630.281 848.067 L 630.281 848.067 Q 632.231 849.037 636.651 849.36 L 636.651 849.36 L 636.651 852.593 L 636.651 852.593 Q 629.631 852.108 616.631 852.108 L 616.631 852.108 L 616.631 852.108 Q 602.721 852.108 596.481 852.593 L 596.481 852.593 L 596.481 849.36 L 596.481 849.36 Q 600.771 849.037 602.786 848.067 L 602.786 848.067 L 602.786 848.067 Q 604.801 847.097 605.516 844.348 L 605.516 844.348 L 605.516 844.348 Q 606.231 841.6 606.231 835.457 L 606.231 835.457 L 606.231 808.137 L 581.141 750.424 L 581.141 750.424 Q 577.111 741.371 573.601 741.371 L 573.601 741.371 L 573.601 737.976 L 573.601 737.976 Q 579.321 738.784 588.941 738.784 L 588.941 738.784 L 588.941 738.784 Q 601.031 738.784 613.381 737.976 L 613.381 737.976 L 613.381 741.371 L 613.381 741.371 Q 608.831 741.371 606.166 742.422 L 606.166 742.422 L 606.166 742.422 Q 603.501 743.472 603.501 746.221 L 603.501 746.221 L 603.501 746.221 Q 603.501 747.676 604.411 749.777 L 604.411 749.777 L 624.171 797.144 L 634.311 771.925 L 634.311 771.925 Q 639.381 759.153 639.381 751.879 L 639.381 751.879 L 639.381 751.879 Q 639.381 746.382 636.586 743.957 L 636.586 743.957 L 636.586 743.957 Q 633.791 741.532 628.591 741.209 L 628.591 741.209 L 628.591 737.976 L 628.591 737.976 Q 637.431 738.461 644.841 738.461 L 644.841 738.461 Z  M 721.741 839.014 L 721.741 839.014 Q 725.511 849.037 729.931 849.36 L 729.931 849.36 L 729.931 852.593 L 729.931 852.593 Q 723.691 852.108 712.901 852.108 L 712.901 852.108 L 712.901 852.108 Q 698.991 852.108 692.361 852.593 L 692.361 852.593 L 692.361 849.36 L 692.361 849.36 Q 696.651 849.037 698.731 847.662 L 698.731 847.662 L 698.731 847.662 Q 700.811 846.288 700.811 843.055 L 700.811 843.055 L 700.811 843.055 Q 700.811 840.145 699.121 835.78 L 699.121 835.78 L 692.621 817.351 L 665.321 817.351 L 663.761 821.716 L 663.761 821.716 Q 660.121 832.386 660.121 838.367 L 660.121 838.367 L 660.121 838.367 Q 660.121 843.863 662.981 846.45 L 662.981 846.45 L 662.981 846.45 Q 665.841 849.037 671.431 849.36 L 671.431 849.36 L 671.431 852.593 L 671.431 852.593 Q 664.021 852.108 656.481 852.108 L 656.481 852.108 L 656.481 852.108 Q 649.461 852.108 645.951 852.593 L 645.951 852.593 L 645.951 849.36 L 645.951 849.36 Q 649.071 848.552 651.736 844.429 L 651.736 844.429 L 651.736 844.429 Q 654.401 840.307 657.391 832.062 L 657.391 832.062 L 684.821 753.98 L 684.821 753.98 Q 685.861 754.142 687.811 754.142 L 687.811 754.142 L 687.811 754.142 Q 689.891 754.142 690.801 753.98 L 690.801 753.98 L 721.741 839.014 Z  M 666.491 814.118 L 691.451 814.118 L 678.971 778.714 L 666.491 814.118 Z  M 761.461 752.04 L 761.461 752.04 Q 767.441 752.04 771.666 753.657 L 771.666 753.657 L 771.666 753.657 Q 775.891 755.274 779.661 758.022 L 779.661 758.022 L 779.661 758.022 Q 781.091 758.992 782.196 759.638 L 782.196 759.638 L 782.196 759.638 Q 783.301 760.285 784.081 760.285 L 784.081 760.285 L 784.081 760.285 Q 785.251 760.285 785.901 758.588 L 785.901 758.588 L 785.901 758.588 Q 786.551 756.89 786.941 753.172 L 786.941 753.172 L 789.931 753.172 L 789.931 753.172 Q 789.281 762.872 789.281 786.797 L 789.281 786.797 L 786.291 786.797 L 786.291 786.797 Q 784.861 772.248 778.751 763.922 L 778.751 763.922 L 778.751 763.922 Q 772.641 755.597 762.761 755.597 L 762.761 755.597 L 762.761 755.597 Q 756.261 755.597 752.296 759.153 L 752.296 759.153 L 752.296 759.153 Q 748.331 762.71 748.331 768.368 L 748.331 768.368 L 748.331 768.368 Q 748.331 772.733 750.476 776.37 L 750.476 776.37 L 750.476 776.37 Q 752.621 780.008 756.131 783.079 L 756.131 783.079 L 756.131 783.079 Q 759.641 786.151 766.401 791.162 L 766.401 791.162 L 769.261 793.264 L 769.261 793.264 Q 777.061 798.76 782.001 803.206 L 782.001 803.206 L 782.001 803.206 Q 786.941 807.652 790.191 813.714 L 790.191 813.714 L 790.191 813.714 Q 793.441 819.776 793.441 827.374 L 793.441 827.374 L 793.441 827.374 Q 793.441 840.63 784.601 847.743 L 784.601 847.743 L 784.601 847.743 Q 775.761 854.856 761.331 854.856 L 761.331 854.856 L 761.331 854.856 Q 755.091 854.856 750.541 853.159 L 750.541 853.159 L 750.541 853.159 Q 745.991 851.461 741.311 848.552 L 741.311 848.552 L 741.311 848.552 Q 738.061 846.612 736.761 846.612 L 736.761 846.612 L 736.761 846.612 Q 735.591 846.612 734.941 848.309 L 734.941 848.309 L 734.941 848.309 Q 734.291 850.007 733.901 853.725 L 733.901 853.725 L 730.911 853.725 L 730.911 853.725 Q 731.431 844.672 731.431 814.28 L 731.431 814.28 L 734.421 814.28 L 734.421 814.28 Q 735.331 831.416 741.896 841.277 L 741.896 841.277 L 741.896 841.277 Q 748.461 851.138 760.421 851.138 L 760.421 851.138 L 760.421 851.138 Q 766.271 851.138 770.561 847.42 L 770.561 847.42 L 770.561 847.42 Q 774.851 843.702 774.851 836.427 L 774.851 836.427 L 774.851 836.427 Q 774.851 829.961 770.821 825.272 L 770.821 825.272 L 770.821 825.272 Q 766.791 820.584 757.041 813.471 L 757.041 813.471 L 757.041 813.471 Q 744.691 804.742 738.126 796.82 L 738.126 796.82 L 738.126 796.82 Q 731.561 788.899 731.561 778.229 L 731.561 778.229 L 731.561 778.229 Q 731.561 765.62 739.946 758.83 L 739.946 758.83 L 739.946 758.83 Q 748.331 752.04 761.461 752.04 L 761.461 752.04 Z  M 837.841 754.304 L 837.841 757.537 L 837.841 757.537 Q 833.421 757.86 831.471 758.83 L 831.471 758.83 L 831.471 758.83 Q 829.521 759.8 828.806 762.548 L 828.806 762.548 L 828.806 762.548 Q 828.091 765.297 828.091 771.44 L 828.091 771.44 L 828.091 835.457 L 828.091 835.457 Q 828.091 841.6 828.806 844.348 L 828.806 844.348 L 828.806 844.348 Q 829.521 847.097 831.471 848.067 L 831.471 848.067 L 831.471 848.067 Q 833.421 849.037 837.841 849.36 L 837.841 849.36 L 837.841 852.593 L 837.841 852.593 Q 831.211 852.108 818.601 852.108 L 818.601 852.108 L 818.601 852.108 Q 804.951 852.108 798.451 852.593 L 798.451 852.593 L 798.451 849.36 L 798.451 849.36 Q 802.871 849.037 804.821 848.067 L 804.821 848.067 L 804.821 848.067 Q 806.771 847.097 807.486 844.348 L 807.486 844.348 L 807.486 844.348 Q 808.201 841.6 808.201 835.457 L 808.201 835.457 L 808.201 771.44 L 808.201 771.44 Q 808.201 765.297 807.486 762.548 L 807.486 762.548 L 807.486 762.548 Q 806.771 759.8 804.756 758.83 L 804.756 758.83 L 804.756 758.83 Q 802.741 757.86 798.451 757.537 L 798.451 757.537 L 798.451 754.304 L 798.451 754.304 Q 804.821 754.789 818.601 754.789 L 818.601 754.789 L 818.601 754.789 Q 831.211 754.789 837.841 754.304 L 837.841 754.304 Z  M 923.971 843.702 L 925.791 845.803 L 925.791 845.803 Q 922.671 850.33 918.771 852.593 L 918.771 852.593 L 918.771 852.593 Q 914.871 854.856 909.021 854.856 L 909.021 854.856 L 909.021 854.856 Q 901.611 854.856 897.581 851.3 L 897.581 851.3 L 897.581 851.3 Q 893.551 847.743 892.381 841.762 L 892.381 841.762 L 888.611 822.686 L 888.611 822.686 Q 887.181 813.633 884.256 810.642 L 884.256 810.642 L 884.256 810.642 Q 881.331 807.652 875.611 807.652 L 875.611 807.652 L 871.321 807.652 L 871.321 835.457 L 871.321 835.457 Q 871.321 841.6 872.036 844.348 L 872.036 844.348 L 872.036 844.348 Q 872.751 847.097 874.766 848.067 L 874.766 848.067 L 874.766 848.067 Q 876.781 849.037 881.071 849.36 L 881.071 849.36 L 881.071 852.593 L 881.071 852.593 Q 873.661 852.108 859.881 852.108 L 859.881 852.108 L 859.881 852.108 Q 847.791 852.108 841.681 852.593 L 841.681 852.593 L 841.681 849.36 L 841.681 849.36 Q 846.101 849.037 848.051 848.067 L 848.051 848.067 L 848.051 848.067 Q 850.001 847.097 850.716 844.348 L 850.716 844.348 L 850.716 844.348 Q 851.431 841.6 851.431 835.457 L 851.431 835.457 L 851.431 771.44 L 851.431 771.44 Q 851.431 765.297 850.716 762.548 L 850.716 762.548 L 850.716 762.548 Q 850.001 759.8 848.051 758.83 L 848.051 758.83 L 848.051 758.83 Q 846.101 757.86 841.681 757.537 L 841.681 757.537 L 841.681 754.304 L 841.681 754.304 Q 847.791 754.789 859.101 754.789 L 859.101 754.789 L 873.921 754.627 L 873.921 754.627 Q 876.521 754.465 879.771 754.465 L 879.771 754.465 L 879.771 754.465 Q 897.191 754.465 905.836 761.013 L 905.836 761.013 L 905.836 761.013 Q 914.481 767.56 914.481 779.199 L 914.481 779.199 L 914.481 779.199 Q 914.481 789.222 907.591 796.82 L 907.591 796.82 L 907.591 796.82 Q 900.701 804.418 884.581 806.52 L 884.581 806.52 L 884.581 806.52 Q 886.401 806.52 888.351 807.005 L 888.351 807.005 L 888.351 807.005 Q 897.711 808.298 903.106 812.178 L 903.106 812.178 L 903.106 812.178 Q 908.501 816.058 910.191 824.464 L 910.191 824.464 L 912.921 838.852 L 912.921 838.852 Q 913.831 843.378 915.131 845.318 L 915.131 845.318 L 915.131 845.318 Q 916.431 847.258 918.381 847.258 L 918.381 847.258 L 918.381 847.258 Q 921.111 847.258 923.971 843.702 L 923.971 843.702 Z  M 878.081 757.537 L 878.081 757.537 Q 875.221 757.537 873.791 758.668 L 873.791 758.668 L 873.791 758.668 Q 872.361 759.8 871.841 762.71 L 871.841 762.71 L 871.841 762.71 Q 871.321 765.62 871.321 771.44 L 871.321 771.44 L 871.321 804.418 L 876.911 804.418 L 876.911 804.418 Q 886.531 804.418 890.106 798.275 L 890.106 798.275 L 890.106 798.275 Q 893.681 792.132 893.681 780.978 L 893.681 780.978 L 893.681 780.978 Q 893.681 769.176 890.106 763.357 L 890.106 763.357 L 890.106 763.357 Q 886.531 757.537 878.081 757.537 L 878.081 757.537 Z " fill="rgb(0,0,0)" /></svg>
    </div>
    <nav className="nav">
      <ul>
        <li>
          <Link activeClassName="active" href="/"><a data-hover="Who am I?">Who am I? &nbsp;</a></Link>
        </li>
        <li>
          <Link activeClassName="active" href="/portfolio"><a data-hover="Portfolio">Portfolio</a></Link>
        </li>
        <li>
          <Link activeClassName="active" href="/blog"><a data-hover="Blog">Blog</a></Link>
        </li>
        <li>
          <Link activeClassName="active" href="/contact"><a data-hover="Contact">Contact</a></Link>
        </li>
      </ul>
    </nav>
  </ >
);

export default Header;