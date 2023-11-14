# Golden-Fan-Shop

## 💡 Overview
Welcome to Golden Fan Shop, the ultimate online destination for stylish clothing so you can look fly like James Bond. Our online store offers a wide range of fashionable items for you to choose from, as well as the ability to compare features and styles, ask questions, and read and submit product reviews.

## 📖 Description
#### Here are some features in the Golden Fan Shop experience:

### Wide selection of stylish clothing items
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126865/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.27.15_PM_hxckwf.png)
### Add items to your outfit and cart for purchase
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126932/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.28.16_PM_b5j5tr.png)
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126453/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.10.26_PM_dwgogm.png)
### Comparison of features and styles
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126619/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.23.29_PM_ua8pj0.png)
### View Questions & Answers about the product
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126427/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.13.30_PM_al62jl.png)
### View Ratings & Reviews, and filter based on rating, relevance, newest, and helpfullness
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_712/v1673126426/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.15.36_PM_pcpdws.png)
### Submit reviews about the product
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_512/v1673127885/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.44.15_PM_akrnqn.png)
![alt text](https://res.cloudinary.com/djfpzruso/image/upload/c_scale,w_512/v1673127885/Golden%20Fan%20Shop%20Images/Screen_Shot_2023-01-07_at_2.44.28_PM_yphzvo.png)




## ⚙️ Installation
To install all required dependencies, open the terminal, navigate to the root folder of this repository. Then, run the following command:

  `npm install --force`

To start the server, run the following command:

  `npm run server-dev`

You should see the following message in the terminal: "Our server is listening on port 3000..."

To build webpack, open a new terminal tab and run the following command:

  `npm run react-dev`

You should see the following message: "webpack <version> compiled successfully..."

Next, you need to configure your API tokens. Create an `.env` file. In this file, you will need to add your personal access github token: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
Add your token with the key name `AUTH_SECRET`

Create a cloudinary account: https://cloudinary.com/. You will need this account to host your images in order to submit images in a review form. 
After creating an account, go to your dashboard, and copy your Cloudiary URL, Cloudinary Username, Cloudinary API Key, and Cloudinary API secret into the `.env` file. The key names should be `CLOUDINARY_URL`, `CLOUDINARY_USER_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.


With these steps completed, you should now be able to access the Golden Fan Shop from your local host for continued development. Thank you for choosing Golden Fan Shop!

## ⚡️ Benchmarks
As of the January 6, 2023 deployment and our first phase of optimization, this is our LightHouse audit report for the product URL: http://goldenfanshop.com
  
  ![alt text](https://res.cloudinary.com/djfpzruso/image/upload/v1699980059/Golden%20Fan%20Shop%20Images/Screen_Shot_Lighthouse_Accessibility_a0qxkc.png)




## ☕ Team Members
Richard Wang (Related Products) - CTO

Daniel Halper (Overview)- CTO

Ste'fan Trueiit (Questions & Answers) - CTO

Tony Vo (Ratings & Reviews) - CTO

