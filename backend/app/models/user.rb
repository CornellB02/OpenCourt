# == Schema Information
#
# Table name: users
#
#  id                      :bigint           not null, primary key
#  first_name              :string
#  last_name               :string
#  email                   :string           not null
#  phone_number            :string
#  review_display_name     :string           default("")
#  session_token           :string           not null
#  primary_dining_location :string           default("")
#  dietary_preferences     :string           default("")
#  special_requests        :string           default("")
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  password_digest         :string           not null
#
class User < ApplicationRecord
  has_secure_password

  # before_validation :ensure_session_token

  # attr_accessor :update_profile

  
  validates :email, presence: true
  validates :email, length: { in: 5..600 }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be an email" }
  validates :email, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  # validate :validate_full_profile
  before_validation :ensure_session_token

  # def validate_full_profile
  #   validates :first_name, presence: true
  #   validates :last_name, presence: true
  #   validates :phone_number, presence: true, length: { in: 10..15 }, format: { with: /\A\d{10}\z|\A\d{3}-\d{3}-\d{4}\z|\A\(\d{3}\)\d{3}-\d{4}\z/, message: "Must be a valid phone number" }
  # end
# 0000000000
# (000)-000-0000
# (000)000-0000
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
end

    # validates :first_name, :last_name, :email, :phone_number, :session_token, presence: true, 
    # validates :email, length: {in: 5..600}, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be an email" }
    # validates :session_token, :email, uniqueness: true
    # validates  :email, :session_token, presence: true
    # validates :email, length: {in: 5..600}, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be an email" }
    # validates :session_token, uniqueness: true
    # validates :phone_number, length: { in: 10..15 }, format: { with: /\A\d{10}\z|\A\d{3}-\d{3}-\d{4}\z|\A\(\d{3}\)\d{3}-\d{4}\z/, message: "Must be a valid phone number" }


  
    # has_many :reservations, dependent: :destroy
    # has_many :reviews, dependent: :destroy
    # has_many :notifications, dependent: :destroy
  
    # after_initialize :ensure_session_token

  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      # has_secure_password gives us the authenticate method
      # debugger
      if user&.authenticate(password)
        return user
      else
        nil
      end
    end
  
    # def generate_session_token
    #   SecureRandom.urlsafe_base64(16)
    # end
  
    # def reset_session_token!
    #   self.session_token = generate_unique_session_token
    #   self.save!
    #   self.session_token
    # end
  
    # private
  
    # def ensure_session_token
    #   self.session_token ||= self.class.generate_session_token
    # end
  
    def reset_session_token!
      self.session_token = generate_unique_session_token
      # debugger
      self.save!
      # debugger
      self.session_token
    end
  
    def generate_unique_session_token
      token = SecureRandom::urlsafe_base64(16)
      while User.exists?(session_token: token)
        token = SecureRandom::urlsafe_base64(16)
      end
      token
    end


end
