import {
  GoalIcon,
  LayoutGridIcon,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function OthersMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm">
          <LayoutGridIcon className="mr-2 h-4 w-4" /> <span>Diğer</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Diğer Sayfalar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <GoalIcon className="mr-2 h-4 w-4" />
            <span>SEO</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>SMS</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Destek</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
