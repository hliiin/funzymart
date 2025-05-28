// components/BreadcrumbNav.jsx
import { Breadcrumb } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

const breadcrumbNameMap = {
  "/": "首页",
  "product": "Catlog",
  // "product/:id": "商品详情",
};

export default function BreadcrumbNav() {
  const location = useLocation();
  const params = useParams();
 // 👉 如果是首页，直接不渲染组件
if (location.pathname === "/") {
  return null;
}
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSnippets.length - 1;
    let name;
    // 判断是不是详情页最后一段
    if (url.startsWith("/product/") && params.id) {
      name = params.id; // 显示商品 ID
    } else {
      const key = pathSnippets[index];
      name = breadcrumbNameMap[key] || key;
    }

    return {
      title: isLast ? name : <Link to={url}>{name}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...extraBreadcrumbItems,
  ];

  // return <Breadcrumb items={breadcrumbItems} style={{height:'50px', margin: "30px 10%", border:'2px solid #e5e5e5', padding:'10px 20px', borderRadius:'50px'  }} />;
  return (
  <Breadcrumb
    items={breadcrumbItems}
    separator={
      <img
        src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
        alt=">"
        style={{ width: 10, height: 10, margin: "0 8px", verticalAlign: "middle" }}
      />
    }
    style={{
      height: "50px",
      margin: "30px 10%",
      border: "2px solid #e5e5e5",
      padding: "10px 20px",
      borderRadius: "50px"
    }}
  />
);

}
