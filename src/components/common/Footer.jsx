import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div>Site design / logo © {year} My Company Inc</div>
    </footer>
  )
}

export default Footer
