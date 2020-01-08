# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
# Indexes
#
#  index_questions_on_owner_id  (owner_id)
#  index_questions_on_title     (title) UNIQUE
#

class Question < ApplicationRecord
    validates :title, :body, :owner_id, presence:true
    validates :title, uniqueness:true

    belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    # //tag_names

end
