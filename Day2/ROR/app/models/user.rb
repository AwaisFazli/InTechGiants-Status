class User < ApplicationRecord

    validates :name, presence: true, uniqueness: true

    validate :validate_user_limit, on: :create


    after_create :display_message

    def display_message
        puts("User Created")
    end
    def validate_user_limit
        errors.add(:base, "Maximum limit of 5 users reached.") if User.count >= 5
    end
end
