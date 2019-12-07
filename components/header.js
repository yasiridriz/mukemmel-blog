import Link from 'next/link';

const Header = () => (
  <div>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Yasir Idriz</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" media="screen" href="/static/bootstrap.css" />
    </head>
    <div class="logo">
      <h1>Yasir Idriz</h1>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <Link href="/"><a>Who am I?</a></Link>
        </li>
        <li>
          <Link href="/portfolio"><a>Portfolio</a></Link>
        </li>
        <li>
        <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </nav>
    
  </div>
);

export default Header;