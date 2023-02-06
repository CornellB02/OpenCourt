class User < ApplicationRecord

    # validates :first_name, :last_name, :email, :phone_number, :session_token, presence: true, 
    # validates :email, length: {in: 5..600}, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be an email" }
    # validates :session_token, :email, uniqueness: true
    validates :first_name, :last_name, :email, :phone_number, :session_token, presence: true
    validates :email, length: {in: 5..600}, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be an email" }
    validates :session_token, :email, uniqueness: true

  
    has_many :reservations, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :notifications, dependent: :destroy
  
    after_initialize :ensure_session_token

    def self.find_by_credentials(email)
      user = User.find_by(email: email)
      user ? user : nil
    end
  
    def self.generate_session_token
      SecureRandom.urlsafe_base64(16)
    end
  
    def reset_session_token!
      self.session_token = self.class.generate_session_token
      self.save!
      self.session_token
    end
  
    private
  
    def ensure_session_token
      self.session_token ||= self.class.generate_session_token
    end
  
    def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
    end
  
    def generate_unique_session_token
      token = SecureRandom::urlsafe_base64(16)
      while User.exists?(session_token: token)
        token = SecureRandom::urlsafe_base64(16)
      end
      token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end