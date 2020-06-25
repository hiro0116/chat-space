## usersテーブル

|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association

- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users


## groupsテーブル

|name|string|null: false|

### Association

- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages



## groups_usersテーブル

|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messagesテーブル

|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string||

### Association

- belongs_to :user
- has_many :groups




