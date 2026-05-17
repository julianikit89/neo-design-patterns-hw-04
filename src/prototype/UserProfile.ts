
    import { UserProfilePrototype } from "./UserProfilePrototype";

    export class UserProfile implements UserProfilePrototype {
      public username: string;
      public department: "finance" | "engineering" | "marketing";
      public permissions: {
        canEditUsers: boolean;
        canApproveBudget: boolean;
        canAccessInternalTools: boolean;
      };

      constructor(
        username: string,
        department: "finance" | "engineering" | "marketing",
        permissions: {
          canEditUsers: boolean;
          canApproveBudget: boolean;
          canAccessInternalTools: boolean;
        }
      ) {
        this.username = username;
        this.department = department;
        this.permissions = permissions;
      }

      public clone(): UserProfilePrototype {
        return new UserProfile(this.username, this.department, {
          canEditUsers: this.permissions.canEditUsers,
          canApproveBudget: this.permissions.canApproveBudget,
          canAccessInternalTools: this.permissions.canAccessInternalTools
        });
      }
    }