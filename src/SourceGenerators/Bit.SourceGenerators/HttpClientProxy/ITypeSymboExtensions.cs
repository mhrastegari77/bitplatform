﻿using System.Linq;

namespace Microsoft.CodeAnalysis;

public static class ITypeSymbolExtensions
{
    public static bool IsIController(this ITypeSymbol type)
    {
        return type.AllInterfaces.Any(x => x.Name == "IAppController");
    }

    public static string GetHttpMethod(this IMethodSymbol method)
    {
        return method.GetAttributes().FirstOrDefault(a => a.AttributeClass?.Name.StartsWith("Http") is true)?.AttributeClass?.Name switch
        {
            "HttpGetAttribute" => "Get",
            "HttpPostAttribute" => "Post",
            "HttpPutAttribute" => "Put",
            "HttpDeleteAttribute" => "Delete",
            "HttpPatchAttribute" => "Patch",
            _ => "Get"
        };
    }

    public static ITypeSymbol GetUnderlyingType(this ITypeSymbol typeSymbol)
    {
        return typeSymbol switch
        {
            INamedTypeSymbol namedTypeSymbol => namedTypeSymbol.TypeArguments.FirstOrDefault() ?? namedTypeSymbol,
            _ => typeSymbol
        };
    }
}
