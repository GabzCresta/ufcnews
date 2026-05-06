-- Part 3: tenant_admin role — podcaster gets read access to their own tenant's dashboard.

DO $$ BEGIN
  CREATE TYPE tenant_role AS ENUM ('member', 'admin');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

ALTER TABLE tenant_membros
  ADD COLUMN IF NOT EXISTS role tenant_role DEFAULT 'member';

CREATE INDEX IF NOT EXISTS idx_tenant_membros_admin
  ON tenant_membros(tenant_id, usuario_id)
  WHERE role = 'admin';
