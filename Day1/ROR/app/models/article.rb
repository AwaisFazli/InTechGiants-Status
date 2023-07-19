class Article < ApplicationRecord
    after_create :display_data

    def display_data
        puts "New Blog Created"
        puts "title #{self.title}"
        puts "title #{self.body}"
        puts "===================="
    end
end
