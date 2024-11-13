"use client";

import { Image } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Home() {
  const [isToggleDisabled, setIsToggleDisabled] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [useSubtleVariant, setUseSubtleVariant] = useState(false);

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-8 p-8 border rounded-lg border-gray-300">
        <h5 className="font-medium">Toggle Component States</h5>
        <div className="w-full flex items-center justify-center">
          <Toggle
            disabled={isToggleDisabled}
            variant={useSubtleVariant ? "subtle" : "default"}
            size={showIcon ? "mdIcon" : "default"}
          >
            {showIcon ? <Image /> : "Toggle"}
          </Toggle>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="disable"
              checked={isToggleDisabled}
              onCheckedChange={(checked) =>
                setIsToggleDisabled(checked === true)
              }
            />
            <label
              htmlFor="disable"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disable
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-icon"
              checked={showIcon}
              onCheckedChange={(checked) => setShowIcon(checked === true)}
            />
            <label
              htmlFor="show-icon"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show icon
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="use-subtle-variant"
              checked={useSubtleVariant}
              onCheckedChange={(checked) => setUseSubtleVariant(!!checked)}
            />
            <label
              htmlFor="use-subtle-variant"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Use subtle variant
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
