# Apartment App

Setup
- Added RSpec
- Added Devise

Authorization vs Authentication
- Authentication - providing the correct credentials (username and password)
- Authorization - what you have access to with your credentials


Devise Config
- Added the mailer
- config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
- config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get
```

Apartments and Users
- User has_many apartments and Apartment belongs_to User


Protected Index
- Seeds for apartments
- Index page
- Icon imports
- Test coverage
- Index controller method
- Request spec
- Fetch for index
- State in app.js

Added Font Awesome Icons
- $ `yarn add @fortawesome/fontawesome-svg-core`
- $ `yarn add @fortawesome/free-solid-svg-icons`
- $ `yarn add @fortawesome/react-fontawesome`
- import { faHome, faCity } from "@fortawesome/free-solid-svg-icons";
- import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
- In JSX: `<FontAwesomeIcon icon={faHome} />`
- In JSX: `<FontAwesomeIcon icon={faCity} />`


Testing in a React in Rails App
- $ yarn add jest
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
Add to the bottom of package.json
```
"jest": {
    "roots": [
      "app/javascript/components"
    ]
```
