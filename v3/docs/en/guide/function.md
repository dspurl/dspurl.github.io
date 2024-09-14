# List of features
> The following are the core functional modules
>
## RBAC permission control
At the heart of the RBAC (role-based access control) model is the introduction of the concept of roles between users and permissions. The direct association between users and permissions is canceled, and permissions are indirectly granted to users through user-associated roles and role-associated permissions (as shown in the figure below), so as to achieve the purpose of decoupling users and permissions.
![图片](/image/RBAC.png)
- Users and roles have a many-to-many relationship, that is, a user can play several roles at the same time, and a role can have multiple users
- High flexibility, accurate to each action, can use different background homepages for different roles, one-click assignment, and takes effect at any time
## Product SKU
SKU = stock keeping unit SKU is the unit of measurement of inventory in and out (buyer purchase, merchant purchase, supplier stocking, and factory production are all based on SKUs).

A SKU is the smallest SKU that is physically indivisible. In other words, a commodity can determine the specific stock of goods according to the SKU.

For example, a pink (three colors: pink, yellow, and black) Zara women's trench coat in M size (four sizes: S, M, L, X) is a combination of SKUs.

When the SKU is generated, the corresponding Cartesian product will be generated according to the attributes, and the inventory of the product can be determined according to a set of SKUs, so the above Zara women's trench coat has a total of 4 * 3 = 12 SKU combinations.

The combination of M size + pink is called a set of SKUs, because the SKU is the smallest physical indivisible stock storage unit, and there is no way to confirm the stock status of this product based on size or color alone.

In the same way, the merchant's replenishment is also done through SKUs, just ask the Taobao store and the supplier that I want 100 red women's windbreakers? Does the supplier know how to stock him?

Apparently not knowing. Because there is also a lack of another sales attribute [size].

All products adopt SKU mode, if you need a single-attribute mode, please bind a single-attribute SKU to the product.

Products support the addition of images and videos

Products can have different main images for each SKU combination
## Shipping templates
It is a shipping tool that is launched for sellers who need to frequently modify the shipping cost after the transaction is completed. With shipping templates, sellers can solve the problem of shipping cost differentiation when customers in different regions purchase products, and can also solve the problem of shipping cost consolidation when the same customer buys multiple products in the store. Shipping templates can be configured in multiple sets, and templates can be copied to quickly generate new shipping templates.
## Shopping cart
Users can add items to their cart

You can modify the specifications of the product on the shopping cart screen

Emptying of shopping carts is allowed

Deletion of cart items is allowed

Some items are allowed to be selected for checkout

The product is invalid, and the shopping cart is marked as invalid
## Shipping Mock Board
A tool launched for users who need to frequently modify the delivery address after the transaction is concluded. With the delivery template, users can set up multiple delivery information, and choose different delivery addresses according to their needs when purchasing goods.

Support to obtain the delivery address in WeChat

Support to obtain the delivery address through positioning
## orders
The project supports users to place orders, cancel orders, deliver goods on the platform, and refund them on the platform (support the refund of part of the payment)
## pay
Support balance payment (there is no recharge entrance by default, the balance is the refund amount or platform reward amount)

Unified payment entrance: The project encapsulates the payment, and the default access to WeChat payment (H5 payment, mini program payment, Native payment, JSAPI payment)
## Carousel
You can add carousel and placement assets to your project
## Template notifications
The project encapsulates the notification, and supports the station message, WeChat applet subscription message, and WeChat official account template message

The user side enables the notification switch, which allows users to turn on and off certain notification functions

The client integrates the association guidance function, that is, when the user is not bound to the mailbox, the user is guided to bind the mailbox; When the user does not follow the WeChat official account, guide the user to follow the WeChat official account (the specific experience can be experienced through the demo applet)

Support binding of background management accounts, when users place orders and receive goods, it will be issued to management personnel through a notification template
## Mail system
When email is configured, this function is automatically enabled, and it is not configured to be disabled by default

Email authentication, binding, message notification sending, and backup result notification

## Back up your system
It can automatically back up projects and databases, and support retaining for a specified number of days, after which the old backup is automatically cleared