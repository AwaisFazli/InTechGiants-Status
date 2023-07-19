class User < ApplicationRecord
  after_create :display_user_created_message

  def display_user_created_message
    puts "User created"
  end
end