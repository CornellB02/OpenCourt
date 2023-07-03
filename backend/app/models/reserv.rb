# == Schema Information
#
# Table name: reservs
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  first_name      :string           not null
#  phone_number    :string           not null
#  party_size      :integer          not null
#  date            :datetime         not null
#  time            :datetime         not null
#  special_request :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Reserv < ApplicationRecord
    validates :phone_number, presence: true, length: { is: 10 }, format: { with: /\A[0-9]{10}\z/, message: "Your phone number format is invalid." }
    validates_presence_of :restaurant_id, :user_id, :date, :time, :first_name
    validates :party_size, presence: true, numericality: { greater_than: 0 }, allow_blank: true
    belongs_to :restaurant
    belongs_to :user
end
