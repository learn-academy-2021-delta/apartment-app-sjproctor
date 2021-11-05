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
