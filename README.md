## usersテーブル

|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

### Association

- has_many :messages
- has_many :groups, through: :groups_users


## groupsテーブル

|groupname|string|null: false|
|chatmember|string|null: faise, foreign_key: true|

### Association

- has_many :users, through: :groups_users



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messagesテーブル

|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user
- has_many :imgs



## imgsテーブル

|img|blob|null: false|



