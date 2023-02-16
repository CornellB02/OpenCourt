# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  phone_number    :string           not null
#  description     :text
#  longitude       :decimal(10, 4)   not null
#  latitude        :decimal(10, 4)   not null
#  neighborhood    :string           not null
#  cuisines        :string           not null
#  dress_code      :string           not null
#  parking_details :string           not null
#  opentime        :time             not null
#  closetime       :time             not null
#  executive_chef  :string           not null
#  additional      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, :phone_number, :neighborhood, :cuisines, :dress_code, :parking_details, :opentime, :closetime, :executive_chef, presence: true
    validates :phone_number, length: { minimum: 10, maximum: 15 }, format: { with: /\A\d{10}\z|\A\d{3}-\d{3}-\d{4}\z|\A\(\d{3}\)\d{3}-\d{4}\z/ }
    # 1234567890 (10 digits)
    # 123-456-7890 (3 digits, dash, 3 digits, dash, 4 digits)
    # (123)456-7890 (open parenthesis, 3 digits, close parenthesis, 3 digits, dash, 4 digits)
    # validates :opentime, :closetime, format: { with: /\A([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\z/ }
    validates :longitude, :latitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }

    # has_many :reservations
    # has_many :reviews
   

    has_one_attached :photo

end




