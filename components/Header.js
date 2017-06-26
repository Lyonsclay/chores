import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <Link prefetch href='/'>
      <a className={pathname === '/chores' && 'is-active'}>Chores</a>
    </Link>

    <Link prefetch href='/about'>
      <a className={pathname === '/index' && 'is-active'}>Add Chore</a>
    </Link>

    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
      `}</style>
  </header>
)
