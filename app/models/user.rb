class User < ApplicationRecord
    has_many :teams
    has_many :leagues, through: :teams

    validates :email, uniqueness: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 8, maximum: 24}
    validates :password, confirmation: true

    has_secure_password
end
