"use client";

const Dropdown = ({ openMenu }) => {
  return (
    <div className={openMenu ? "dropdown-open" : "dropdown-closed"}>
      <div>
        <h2>Digital</h2>
        <ul>
          <li>Headphones</li>
          <li>Computers</li>
          <li>Computers</li>
          <li>Mobile</li>
          <li>Tablets</li>
        </ul>
      </div>

      <div>
        <h2>Clothes</h2>
        <ul>
          <li>Shirts</li>
          <li>T-Shirts</li>
          <li>Pants</li>
          <li>Jackets</li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Kids</li>
        </ul>
      </div>

      <div>
        <h2>Accessories</h2>
        <ul>
          <li>Necklesses</li>
          <li>Watches</li>
          <li>Men</li>
          <li>Women</li>
          <li>Teenager</li>
        </ul>
      </div>

      <div>
        <h2>Clothes</h2>
        <ul>
          <li>Shirts</li>
          <li>T-Shirts</li>
          <li>Pants</li>
          <li>Jackets</li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Kids</li>
        </ul>
      </div>

      <div>
        <h2>Clothes</h2>
        <ul>
          <li>Shirts</li>
          <li>T-Shirts</li>
          <li>Pants</li>
          <li>Jackets</li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
