import { Menu } from "antd";

export default function Home() {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          {
            label: "Fashion",
            key: "Fashion",
            children: [
              {
                label: "Shirts",
                key: "Shirts",
              },
              {
                label: "T-Shirts",
                key: "T_Shirts",
              },
              {
                label: "Pants",
                key: "Pants",
              },
              {
                label: "Hats",
                key: "Hats",
              },
            ],
          },
          {
            label: "Furniture",
            key: "Furniture",
          },
          {
            label: "Electronics",
            key: "Electronics",
          },
        ]}
      ></Menu>
    </div>
  );
}
