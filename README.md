# MJR Company

A static website developed for a company specialized in construction of various tools, moulds and casts. It contains information about the company, as well as several photo galleries of different product categories.

[Visit original site](http://mjralatnica.com)

## Development

While originally developed with plain HTML, CSS and JS, in 2021, the website has been migrated to **GatsbyJS**. Despite already scoring pretty high on speed tests, this step has managed to take it to the next level, by removing loading time between pages, optimizing images and using **GraphQL**, as well as adding a custom 404 page for non-existent routes. The revision also gave me a chance to improve other features, such as adding better form validation on the contact page, or using **i18next** for switching languages without reloading or duplicating pages. Still, the majority of the content and design are from my old version, so I left the original year of development written, even though the website currently uses several more recent features.

## Local setup

If you wish to set up and take a look at this project locally, you can do so by following a few simple steps

1. Download the code

2. Run *npm install* in the root folder of the app

3. Create a *MapsAPI.js* file inside the *src* subfolder, which should contain your **Google Maps API key** stored in a variable. Make sure the variable is exported as a *default*.

4. Run the app once using *npm start* or *gatsby develop*. The website should load at this point, but it will show just placeholders instead of actual text.

5. Move the *locales* folder into the *public* subfolder (which should have been automatically generated after completing the previous step)

6. Run *npm start* or *gatsby develop* in the root of the project once again

That's it, you can refresh the page now, or if you terminated the development server in the meantime, run it again, and the entire website should work properly (except the e-mail sending script).
