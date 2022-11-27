class Property < ApplicationRecord
    validates :name, presence: true
    validates :headline, presence: true
    validates :description, presence: true
    validates :address_1, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :country, presence: true

    geocoded_by :address

    # makes a call to the geocode api and gets longitude and latitude of location
    after_validation :geocode

    def address
        [state, country].compact.join(',')
    end
end
