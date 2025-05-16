/*
  # Admin Panel Schema

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `role` (text)
    - `announcements`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `is_new` (boolean)
      - `created_at` (timestamp)
      - `created_by` (uuid, references admins)
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `date` (date)
      - `time` (text)
      - `location` (text)
      - `created_at` (timestamp)
      - `created_by` (uuid, references admins)
    - `news`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `created_by` (uuid, references admins)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  role text NOT NULL CHECK (role IN ('super_admin', 'admin', 'editor'))
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read own data"
  ON admins
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create announcements table
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  is_new boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES admins(id)
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage announcements"
  ON announcements
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES admins(id)
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES admins(id)
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (EXISTS (SELECT 1 FROM admins WHERE id = auth.uid()));