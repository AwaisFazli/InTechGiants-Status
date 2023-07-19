class Article < ApplicationRecord

    validates :title, presence: true


    after_create :display_message

    def display_message
        puts("User Created")
    end
end
