🚚 Let's Shyp - Easy Delivery Booking App
Let's Shyp is a smart website where people can book a delivery truck or bike to move their stuff. It works like a storybook—you fill in one page, then move to the next until your order is ready.

🛠️ How to start it
Download the code to your computer.

Open your terminal and type npm install.

Type npm start to see the app.

✨ Smart Things This App Does (Edge Cases)
I made the app "smart" so it doesn't make mistakes:

Dynamic Pricing: If you go back and change your vehicle (like picking a Truck instead of a Bike), the price updates instantly so you always see the correct cost.

No Short Addresses: If you type a tiny address like "Home," the app asks for more detail so the driver doesn't get lost.

No "Number-Only" Addresses: If you just type "12345," the app will say, "Hey! Give me a street name too!".

The "Same Place" Warning: If you try to send a package from your house to your house, a big RED message appears.

Blocked Areas: If you enter a secret code like "12345," the app says, "Sorry, we don't go there yet!".

Phone Guard: You can only type numbers for your phone, and it must be exactly 10 digits.

🎨 Why it looks so good (UI Consistency)
The "Magic" White Box: The main box never jumps or shakes. It stays the same size even if an error message pops up.

Follow the Buttons: The "Next" and "Back" buttons are always at the bottom of the box.

Color Power: I used Navy Blue and Orange to make it look like a real brand.

Helpful Icons: I added colorful pictures like a location pin so you know exactly what to type.

💡 Things to Know (Assumptions & Limitations)
Pretend Payment: When you click "Pay," it spins for 2 seconds to show it's "thinking".

No Real Maps: You have to type the address yourself; the app doesn't suggest addresses from Google yet.

Address Detailing: Even though we stop "numbers-only" addresses, in a real business, we would need separate boxes for "House Number," "Street Name," and "Landmark" to make sure the driver never gets confused.
