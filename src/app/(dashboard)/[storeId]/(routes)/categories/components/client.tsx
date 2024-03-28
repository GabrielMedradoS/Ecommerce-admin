"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

import { CategoryColumn, columns } from "./columns";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categorias (${data.length})`}
          description="Gerencie a categoria da sua loja"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Adicionar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Chamadas de API para categorias" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};
