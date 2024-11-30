class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :phone_number, :created_at
end
