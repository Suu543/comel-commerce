#

```
src
├── components
  ├── admin
    ├── AdminChatRoomComponent.js
    ├── AdminLinksComponent.js
  ├── filterQueryResultOptions
    ├── AttributesFilterComponent.js
    ├── CategoryFilterComponent.js
    ├── PriceFilterComponent.js
    ├── RatingFilterComponent.js
  ├── user
    ├── ProductCarouselComponent.js
    ├── RoutesWithUserChatComponent.js
    ├── UserChatComponent.js
  ├── AddedToCartMessageComponent.js
  ├── CartItemComponent.js
  ├── CategoryCardComponent.js
  ├── FooterComponent.js
  ├── HeaderComponent.js
  ├── PaginationComponent.js
  ├── ProductForListComponent.js
  ├── ProtectedRoutesComponent.js
  ├── SortOptionsComponent.js
├── pages
  ├── admin
    ├── AdminAnalyticsPage.js
    ├── AdminChatsPage.js
    ├── AdminCreateProductPage.js
    ├── AdminEditProductPage.js
    ├── AdminEditUserPage.js
    ├── AdminOrderDetailsPage.js
    ├── AdminOrdersPage.js
    ├── AdminProductsPage.js
    ├── AdminUsersPage.js
  ├── user
    ├── UserCartDetailsPage.js
    ├── UserOrderDetailsPage.js
    ├── UserOrdersPage.js
    ├── UserProfilePage.js
  ├── CartPage.js
  ├── HomePage.js
  ├── LoginPage.js
  ├── ProductDetailsPage.js
  ├── ProductListPage.js
  ├── RegisterPage.js
├── utils
  ├── ScrollToTop.js
├── chats.css
├── index.css
├── App.js
├── index.js

```

## Part1

- Create first page and route
- Create routes for publicly available pages like list of products
- Create routes for protected pages for regular user
- Create routes for protected pages for admin
- Create header and footer components
- Create user chat component

## Part2

Tools

- bootstrap
- bootstrap-icons
- react-router-bootstrap
- react-router-dom

Features

- Create the header using react bootstrap
- Create badge for number of products in the cart and select list for categories
- Customize header component

## Part3

- Style Footer Component

## Part4

- Create Carousel and Card Components using React Bootstrap

## Part5

- Customize the Homepage

## Part6

- Chat Popup - Blue Circle with Icons
- Chat Popup - Message Field and Submit Button
- Chat Popup - Example Chat History

## Part7

- Prepare Product List Page

## Part8

- Create HTML for Star Rating System

```cmd
npm install react-simple-star-rating
```

### Part9

- Improve HTML for sorting and filtering Products

```javascript
import { Form } from "react-bootstrap";

// low to high - price_1 in MongoDB: standard order from low to high
// high to low - price_-1 in MongoDB: standard order from high to low

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>SORT BY</option>
      <option value="price_1">Price: Low To High</option>
      <option value="price_-1">Price: High To Low</option>
      <option value="rating_-1">Customer Rating</option>
      <option value="name_1">Name A-Z</option>
      <option value="name_-1">Name Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
```

### Part10

- Improve Component for Category Filters

### Part11

- Improve Attributes Section for Filtering Options

### Part12

- Improve Component for Product List

### Part13

- Improve Pagination Component

### Part14

- Create Scroll To Top Functionality

### Part15

- Prepare Product Details Page

### Part16

- Continue Developing Product Details Page
- Bootstrap fluid attribute: use the fluid to scale image nicely to the parent element.

### Part17

- Improve Message Component

### Part18

- Update Product Description Page

### Part19

- Improve Review Section

### Part20

```cmd
npm install js-image-zoom
```

- Create Mouse Hover Effect on Images

### Part21

- Prepare Cart Page

### Part22

- Finish Cart Page

### Part23

- Prepare Register Page

### Part24

- Continue Developing Register Page

### Part24

- Finish Template for Register Page
- setCustomValidity: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=y2kgr&logNo=221334744854

### Part25

- Prepare Login Page

### Part26

- Prepare User Profile Page
- currentTarget: https://velog.io/@edie_ko/JavaScript-event-target%EA%B3%BC-currentTarget%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90

### Part27

- User Orders Page

### Part28

- User Order Details Page

### Part29

- Prepare the Page for User Cart Details

### Part30

- Prepare the Page for Admin Orders

### Part31

- Create Component for Admin Links

### Part32

- Prepare Admin Order Details Page

### Part33

- Create Product List Page for Admin

### Part34

- Prepare the Page for Creating The Product by Admin

### Part35

- Finish the Page for Creating The Product by Admin

### Part36

- Complete Edit Product Page for Administrator

### Part37

- Create Users Page for Admin

### Part38

- Create Edit Users Page for Admin

### Part39

- Create Chats Page for Admin

### Part40

- Create Chat Component for Admin

### Part41

```cmd
npm install recharts
```

- Prepare Analytics Page for Admin

### Part42

- Finish Analytics Page for Admin
